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
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-for-dev');
      req.user = decoded;
    } catch {
      // Invalid/expired token: continue unauthenticated for public preview
    }
  }
  next();
};

router.use(optionalAuth);

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
