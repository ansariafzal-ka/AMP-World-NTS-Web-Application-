const examCenterService = require('../services/examCenter.service');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

/**
 * ExamCenter Controller
 * Handles HTTP requests and applies role-based access control.
 */
class ExamCenterController {
  /**
   * GET /api/web/exam-center/dashboard
   */
  getDashboard = asyncHandler(async (req, res) => {
    let targetCentreCode = null;

    // Role-based logic
    if (req.user) {
      if (req.user.role === 'ExamCenter') {
        // Individual exam centre user: STRICTLY lock to their own centreCode
        targetCentreCode = req.user.centreCode;
        if (!targetCentreCode) {
          throw new ApiError(403, 'Your account is not linked to any exam centre.');
        }
      } else if (req.user.role === 'Admin') {
        // Admin: can query any centre, or defaults to the first
        targetCentreCode = req.query.centreCode || 'AMPNTS25TG0644';
      }
    } else {
      // In development / preview mode without login: allow query or default to sample
      targetCentreCode = req.query.centreCode || 'AMPNTS25TG0644';
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

    if (req.user && req.user.role === 'ExamCenter') {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.body.centreCode || req.query.centreCode || 'AMPNTS25TG0644';
    }

    const summaryRows = req.body.summaryData || req.body.rows || req.body;
    const submittedBy = req.user ? req.user.email || req.user.name : 'Web User';

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

    if (req.user && req.user.role === 'ExamCenter') {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.query.centreCode || 'AMPNTS25TG0644';
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

    if (req.user && req.user.role === 'ExamCenter') {
      targetCentreCode = req.user.centreCode;
    } else {
      targetCentreCode = req.body.centreCode || req.query.centreCode || 'AMPNTS25TG0644';
    }

    const classLabel = req.body.class || req.body.classLabel || '8';
    const attendanceList = req.body.attendanceList || req.body.students || [];
    const markedBy = req.user ? req.user.email || req.user.name : 'Web Invigilator';

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
}

module.exports = new ExamCenterController();
