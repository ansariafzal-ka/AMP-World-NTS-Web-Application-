const jwt = require('jsonwebtoken');
const examCenterService = require('../services/examCenter.service');
const otpService = require('../services/otp.service');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

/**
 * ExamCenter Controller
 * Handles authentication, OTP verification, and role-based data access.
 */
class ExamCenterController {
  /**
   * POST /api/web/exam-center/send-otp
   * Verifies that mobile belongs to an Exam Centre/Observer,
   * generates OTP via SP dbo.SP_MobileOtpVerification_Create, and triggers SMS.
   */
  sendOtp = asyncHandler(async (req, res) => {
    const mobile = req.body.mobile || req.query.mobile;
    if (!mobile) {
      throw new ApiError(400, 'Mobile number is required.');
    }

    // 1. Check if the mobile is registered with any Exam Centre or Observer
    const centreCheck = await examCenterService.checkMobileExists(mobile);
    if (!centreCheck || !centreCheck.exists) {
      throw new ApiError(404, 'This mobile number is not registered with any Exam Centre or Observer.');
    }

    // 2. Generate and store OTP in database via stored procedure & dispatch SMS
    const ipAddress = req.ip || req.headers['x-forwarded-for'];
    const deviceInfo = req.headers['user-agent'] || 'Web Portal';
    const otpSession = await otpService.generateAndSendOtp(mobile, ipAddress, deviceInfo);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          requestId: otpSession.requestId,
          expiresInSeconds: otpSession.expiresInSeconds,
          centreName: centreCheck.centreName,
          role: centreCheck.role,
          ...(otpSession.devOtp ? { devOtp: otpSession.devOtp } : {}),
        },
        'OTP sent successfully.'
      )
    );
  });

  /**
   * POST /api/web/exam-center/verify-otp
   * Validates OTP via SP dbo.SP_MobileOtpVerification_Verify,
   * and issues signed JWT granting access strictly to this centre's data.
   */
  verifyOtp = asyncHandler(async (req, res) => {
    const { requestId, mobile, otp } = req.body;

    if (!requestId) {
      throw new ApiError(400, 'Request ID is required.');
    }
    if (!mobile) {
      throw new ApiError(400, 'Mobile number is required.');
    }
    if (!otp) {
      throw new ApiError(400, 'OTP code is required.');
    }

    // 1. Verify OTP using stored procedure
    await otpService.verifyOtp(requestId, mobile, otp);

    // 2. Lookup registered user/centre details
    const centre = await examCenterService.checkMobileExists(mobile);
    if (!centre || !centre.exists) {
      throw new ApiError(404, 'Registered account details not found.');
    }

    // 3. Issue cryptographic JWT token containing centreCode and role
    const payload = {
      id: centre.id,
      centreCode: centre.centreCode,
      centreName: centre.centreName,
      contactPerson: centre.contactPerson,
      role: centre.role || 'ExamCenter',
      observerType: centre.observerType,
      phone: centre.phone,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || 'amp_nts_jwt_secret_key_2026_super_secure',
      { expiresIn: process.env.JWT_ACCESS_EXPIRY || '1d' }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          token,
          user: payload,
        },
        'OTP verified successfully. Logged in.'
      )
    );
  });

  /**
   * GET /api/web/exam-center/dashboard
   * Enforces strict tenancy: Logged-in Exam Centres can ONLY view their own data.
   */
  getDashboard = asyncHandler(async (req, res) => {
    let targetCentreCode = null;

    if (req.user) {
      if (req.user.role === 'ExamCenter' || req.user.role === 'Observer') {
        // Individual exam centre user: STRICTLY locked to their own token's centreCode!
        // URL query params cannot override the authenticated token
        targetCentreCode = req.user.centreCode;
        if (!targetCentreCode) {
          throw new ApiError(403, 'Your authenticated session is not linked to any exam centre.');
        }
      } else if (req.user.role === 'Admin') {
        // Admin: can query any centre, or defaults to the first
        targetCentreCode = req.query.centreCode || '3560';
      }
    } else {
      // If query centreCode is provided (for dev/direct access), use it; otherwise require login
      targetCentreCode = req.query.centreCode;
      if (!targetCentreCode) {
        throw new ApiError(401, 'Please log in to access your exam centre dashboard.');
      }
    }

    const data = await examCenterService.getDashboardData(targetCentreCode);

    return res
      .status(200)
      .json(new ApiResponse(200, data, 'Exam center dashboard retrieved successfully.'));
  });

  /**
   * POST /api/web/exam-center/attendance-summary
   */
  submitAttendanceSummary = asyncHandler(async (req, res) => {
    let targetCentreCode = null;

    if (req.user && (req.user.role === 'ExamCenter' || req.user.role === 'Observer')) {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.body.centreCode || req.query.centreCode;
      if (!targetCentreCode) {
        throw new ApiError(400, 'Exam centre code is required.');
      }
    }

    const summaryRows = req.body.summaryData || req.body.rows || req.body;
    const submittedBy = req.user ? req.user.contactPerson || req.user.phone : 'Web Portal User';

    const result = await examCenterService.submitAttendanceSummary(
      targetCentreCode,
      summaryRows,
      submittedBy
    );

    return res
      .status(200)
      .json(new ApiResponse(200, result, 'Attendance summary submitted successfully.'));
  });

  /**
   * GET /api/web/exam-center/attendance/students
   */
  getStudentsRoster = asyncHandler(async (req, res) => {
    let targetCentreCode = null;

    if (req.user && (req.user.role === 'ExamCenter' || req.user.role === 'Observer')) {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.query.centreCode;
      if (!targetCentreCode) {
        throw new ApiError(400, 'Exam centre code is required.');
      }
    }

    const classLabel = req.query.class || req.query.classLabel || '8';
    const students = await examCenterService.getStudentsForAttendance(targetCentreCode, classLabel);

    return res
      .status(200)
      .json(new ApiResponse(200, students, `Roster for class ${classLabel} fetched successfully.`));
  });

  /**
   * POST /api/web/exam-center/attendance/save
   */
  saveStudentsAttendance = asyncHandler(async (req, res) => {
    let targetCentreCode = null;

    if (req.user && (req.user.role === 'ExamCenter' || req.user.role === 'Observer')) {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.body.centreCode || req.query.centreCode;
      if (!targetCentreCode) {
        throw new ApiError(400, 'Exam centre code is required.');
      }
    }

    const classLabel = req.body.class || req.body.classLabel || '8';
    const attendanceList = req.body.attendanceList || req.body.students || [];
    const markedBy = req.user ? req.user.contactPerson || req.user.phone : 'Web Invigilator';

    const result = await examCenterService.saveStudentAttendance(
      targetCentreCode,
      classLabel,
      attendanceList,
      markedBy
    );

    return res
      .status(200)
      .json(new ApiResponse(200, result, 'Student attendance saved and synced successfully.'));
  });

  /**
   * POST or GET /api/web/exam-center/check-mobile
   */
  checkMobile = asyncHandler(async (req, res) => {
    const mobile = req.body.mobile || req.query.mobile;
    if (!mobile) {
      throw new ApiError(400, 'Mobile number is required.');
    }

    const result = await examCenterService.checkMobileExists(mobile);
    if (!result.exists) {
      return res
        .status(200)
        .json(new ApiResponse(200, { exists: false }, 'Mobile number not registered with any Exam Centre.'));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, result, 'Mobile number verified successfully.'));
  });
}

module.exports = new ExamCenterController();
