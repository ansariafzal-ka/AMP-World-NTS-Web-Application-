const { sql, getPool } = require('../config/database');
const { ApiError } = require('../utils/ApiError');

/**
 * ExamCenter Service
 * Interacts with Microsoft SQL Server using the EXAMCENTRE schema and stored procedures.
 */
class ExamCenterService {
  /**
   * Fetches complete dashboard data for a given centre code
   * Executes EXAMCENTRE.sp_ExamCentre_GetDashboard
   */
  async getDashboardData(centreCode) {
    if (!centreCode) {
      throw new ApiError(400, 'Exam centre code is required.');
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input('ExamCentreCode', sql.VarChar(20), String(centreCode))
      .execute('EXAMCENTRE.sp_ExamCentre_GetDashboard');

    const centreRows = result.recordsets[0] || [];
    if (centreRows.length === 0) {
      throw new ApiError(404, `Exam centre not found for code: "${centreCode}"`);
    }

    const centre = centreRows[0];
    const observerRows = result.recordsets[1] || [];
    const allocationRows = result.recordsets[2] || [];

    return {
      id: centre.Id,
      code: centre.ExamCentreCode,
      name: centre.CentreName,
      institutionName: centre.InstitutionName,
      pocName: centre.ContactPerson,
      pocPhone: centre.ContactPhone,
      pocEmail: centre.ContactEmail || '',
      address: centre.Address,
      city: centre.DistrictName || '',
      state: centre.StateName || '',
      pincode: centre.Pincode,
      capacityAllocated: centre.Registered || 0,
      capacityTotal: centre.ApprovedCapacity || centre.Capacity || 0,
      observers: observerRows.map((obs) => ({
        id: obs.Id,
        name: obs.Name,
        phone: obs.Mobile,
        type: obs.ObserverTypeName || (obs.ObserverTypeId === 1 ? 'AMP Observer' : 'Exam Centre Observer'),
        designation: obs.Designation || '',
      })),
      allocations: allocationRows.map((row) => ({
        id: row.Id,
        classLabel: row.ClassLabel,
        urdu: row.Urdu,
        hindi: row.Hindi,
        english: row.English,
        gujarati: row.Gujarati,
        bengali: row.Bengali,
        total: row.Total,
      })),
    };
  }

  /**
   * Submits attendance summary rows for an exam centre
   * Executes EXAMCENTRE.sp_ExamCentre_SubmitAttendanceSummary
   */
  async submitAttendanceSummary(centreCode, summaryRows, submittedBy = null) {
    if (!centreCode) {
      throw new ApiError(400, 'Exam centre code is required.');
    }
    if (!Array.isArray(summaryRows) || summaryRows.length === 0) {
      throw new ApiError(400, 'Summary data rows must be a non-empty array.');
    }

    const pool = await getPool();
    const insertedIds = [];

    for (const row of summaryRows) {
      const result = await pool
        .request()
        .input('ExamCentreCode', sql.VarChar(20), String(centreCode))
        .input('ClassLabel', sql.NVarChar(50), String(row.class || row.classLabel))
        .input('Allocated', sql.Int, parseInt(row.allocated, 10) || 0)
        .input('Present', sql.Int, parseInt(row.present, 10) || 0)
        .input('Absent', sql.Int, parseInt(row.absent, 10) || 0)
        .input('SubmittedBy', sql.NVarChar(150), submittedBy ? String(submittedBy) : null)
        .execute('EXAMCENTRE.sp_ExamCentre_SubmitAttendanceSummary');

      if (result.recordset && result.recordset.length > 0) {
        insertedIds.push(result.recordset[0].InsertedId);
      }
    }

    return {
      success: true,
      centreCode,
      insertedCount: insertedIds.length,
      insertedIds,
    };
  }

  /**
   * Fetches registered students list for marking web attendance
   * Executes EXAMCENTRE.sp_ExamCentre_GetStudentsForAttendance
   */
  async getStudentsForAttendance(centreCode, classLabel) {
    if (!centreCode) {
      throw new ApiError(400, 'Exam centre code is required.');
    }
    if (!classLabel) {
      throw new ApiError(400, 'Class label is required.');
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input('ExamCentreCode', sql.VarChar(20), String(centreCode))
      .input('ClassLabel', sql.NVarChar(50), String(classLabel))
      .execute('EXAMCENTRE.sp_ExamCentre_GetStudentsForAttendance');

    const rows = result.recordset || [];
    return rows.map((r) => ({
      id: r.Id,
      rollNumber: r.RollNumber,
      studentName: r.StudentName,
      gender: r.Gender || 'Unspecified',
      medium: r.Medium || 'English',
      isPresent: Boolean(r.IsPresent),
      markedAt: r.MarkedAt,
      markedBy: r.MarkedBy || '',
    }));
  }

  /**
   * Saves student attendance in bulk
   * Executes EXAMCENTRE.sp_ExamCentre_SaveStudentAttendance
   */
  async saveStudentAttendance(centreCode, classLabel, attendanceList, markedBy = null) {
    if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
      throw new ApiError(400, 'Attendance list must be a non-empty array.');
    }

    const pool = await getPool();

    for (const item of attendanceList) {
      await pool
        .request()
        .input('Id', sql.Int, parseInt(item.id, 10))
        .input('IsPresent', sql.Bit, item.isPresent ? 1 : 0)
        .input('MarkedBy', sql.NVarChar(150), markedBy ? String(markedBy) : null)
        .execute('EXAMCENTRE.sp_ExamCentre_SaveStudentAttendance');
    }

    // Automatically compute present and absent counts to sync attendance summary
    const presentCount = attendanceList.filter((s) => s.isPresent).length;
    const absentCount = attendanceList.length - presentCount;

    // Persist this into AttendanceSummary table
    await this.submitAttendanceSummary(
      centreCode,
      [
        {
          class: classLabel,
          allocated: attendanceList.length,
          present: presentCount,
          absent: absentCount,
        },
      ],
      markedBy
    );

    return {
      success: true,
      centreCode,
      classLabel,
      totalCount: attendanceList.length,
      presentCount,
      absentCount,
    };
  }
}

module.exports = new ExamCenterService();
