const { ApiError } = require('../utils/ApiError');

const validateAttendanceSummaryPayload = (req, res, next) => {
  const summaryRows = req.body.summaryData || req.body.rows || req.body;

  if (!summaryRows || !Array.isArray(summaryRows) || summaryRows.length === 0) {
    throw new ApiError(400, 'Attendance summary data must be a non-empty array of class records.');
  }

  for (const [index, row] of summaryRows.entries()) {
    if (!row.class && !row.classLabel) {
      throw new ApiError(400, `Row ${index + 1}: Class label is required.`);
    }
    const allocated = parseInt(row.allocated, 10);
    const present = parseInt(row.present, 10);
    const absent = parseInt(row.absent, 10);

    if (isNaN(allocated) || allocated < 0) {
      throw new ApiError(400, `Row ${index + 1}: Allocated students must be a non-negative number.`);
    }
    if (isNaN(present) || present < 0) {
      throw new ApiError(400, `Row ${index + 1}: Present count must be a non-negative number.`);
    }
    if (isNaN(absent) || absent < 0) {
      throw new ApiError(400, `Row ${index + 1}: Absent count must be a non-negative number.`);
    }
  }

  next();
};

module.exports = {
  validateAttendanceSummaryPayload,
};
