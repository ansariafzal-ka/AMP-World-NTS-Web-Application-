const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const examCenterController = require('../../controllers/examCenter.controller');
const { validateAttendanceSummaryPayload } = require('../../validators/examCenter.validator');

// Optional auth middleware: extracts user claims if Bearer token is provided
const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'amp_nts_jwt_secret_key_2026_super_secure');
      req.user = decoded;
    } catch {
      // Invalid/expired token: continue unauthenticated
    }
  }
  next();
};

router.use(optionalAuth);

// OTP & Authentication Endpoints
router.post('/send-otp', examCenterController.sendOtp);
router.post('/verify-otp', examCenterController.verifyOtp);

// Mobile Existence Check Endpoint
router.post('/check-mobile', examCenterController.checkMobile);
router.get('/check-mobile', examCenterController.checkMobile);

// GET /api/web/exam-center/dashboard
router.get('/dashboard', examCenterController.getDashboard);

// POST /api/web/exam-center/attendance-summary
router.post(
  '/attendance-summary',
  validateAttendanceSummaryPayload,
  examCenterController.submitAttendanceSummary
);

// GET /api/web/exam-center/attendance/students
router.get('/attendance/students', examCenterController.getStudentsRoster);

// POST /api/web/exam-center/attendance/save
router.post('/attendance/save', examCenterController.saveStudentsAttendance);

module.exports = router;
