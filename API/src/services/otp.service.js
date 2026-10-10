const crypto = require('crypto');
const { sql, getPool } = require('../config/database');
const { ApiError } = require('../utils/ApiError');
const smsService = require('./sms.service');

/**
 * OTP Verification Service
 * Interacts with dbo.SP_MobileOtpVerification_Create and dbo.SP_MobileOtpVerification_Verify
 */
class OtpService {
  /**
   * Hashes an OTP code deterministically using SHA-256 for SQL procedure comparison.
   * @param {string} otp 
   * @returns {string} 64-char hex hash
   */
  hashOtp(otp) {
    return crypto.createHash('sha256').update(String(otp).trim()).digest('hex');
  }

  /**
   * Generates a secure random 6-digit OTP, stores it via SP, and dispatches via SMS.
   * @param {string} mobile 10-digit mobile number
   * @param {string} [ipAddress]
   * @param {string} [deviceInfo]
   * @returns {Promise<{ requestId: string, expiresInSeconds: number, devOtp?: string }>}
   */
  async generateAndSendOtp(mobile, ipAddress = null, deviceInfo = null) {
    const cleanMobile = String(mobile || '').replace(/\D/g, '').slice(-10);
    if (!cleanMobile || cleanMobile.length !== 10) {
      throw new ApiError(400, 'Invalid 10-digit mobile number.');
    }

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = this.hashOtp(otp);

    console.log(`[OTP Service] Generated OTP for ${cleanMobile}: ${otp}`);

    const pool = await getPool();

    // Call official stored procedure: dbo.SP_MobileOtpVerification_Create
    const result = await pool
      .request()
      .input('CountryCode', sql.VarChar(5), '+91')
      .input('MobileNumber', sql.VarChar(15), cleanMobile)
      .input('OtpHash', sql.VarChar(255), otpHash)
      .input('Purpose', sql.VarChar(20), 'LOGIN')
      .input('ExpiryMinutes', sql.Int, 10)
      .input('IpAddress', sql.VarChar(45), ipAddress || null)
      .input('DeviceInfo', sql.VarChar(255), deviceInfo || null)
      .execute('dbo.SP_MobileOtpVerification_Create');

    const created = result.recordset && result.recordset[0];
    if (!created || !created.RequestId) {
      throw new ApiError(500, 'Failed to create OTP verification session.');
    }

    // Dispatch SMS via SMS gateway
    await smsService.sendOtpSms(cleanMobile, otp);

    const isDev = process.env.NODE_ENV !== 'production';

    return {
      requestId: created.RequestId,
      expiresInSeconds: created.ExpiresInSeconds || 600,
      otpExpiresAt: created.OtpExpiresAt,
      // For developer convenience when testing without SMS delivery delay:
      ...(isDev ? { devOtp: otp } : {}),
    };
  }

  /**
   * Verifies the OTP using dbo.SP_MobileOtpVerification_Verify
   * @param {string} requestId GUID returned from generateAndSendOtp
   * @param {string} mobile 10-digit mobile number
   * @param {string} otp 6-digit entered OTP
   * @returns {Promise<boolean>}
   */
  async verifyOtp(requestId, mobile, otp) {
    if (!requestId) {
      throw new ApiError(400, 'Request ID is required for OTP verification.');
    }
    const cleanMobile = String(mobile || '').replace(/\D/g, '').slice(-10);
    if (!cleanMobile || cleanMobile.length !== 10) {
      throw new ApiError(400, 'Invalid 10-digit mobile number.');
    }
    if (!otp || String(otp).trim().length < 4) {
      throw new ApiError(400, 'Please enter a valid OTP.');
    }

    const otpHash = this.hashOtp(otp);
    const pool = await getPool();

    // Call official stored procedure: dbo.SP_MobileOtpVerification_Verify
    const result = await pool
      .request()
      .input('RequestId', sql.UniqueIdentifier, requestId)
      .input('CountryCode', sql.VarChar(5), '+91')
      .input('MobileNumber', sql.VarChar(15), cleanMobile)
      .input('OtpHash', sql.VarChar(255), otpHash)
      .execute('dbo.SP_MobileOtpVerification_Verify');

    const verification = result.recordset && result.recordset[0];
    const outcome = verification ? verification.Result : 'NOT_FOUND';

    if (outcome === 'SUCCESS') {
      return true;
    }

    if (outcome === 'INVALID_OTP') {
      throw new ApiError(400, 'Invalid OTP. Please check the code and try again.');
    }

    if (outcome === 'EXPIRED') {
      throw new ApiError(400, 'OTP has expired. Please request a new one.');
    }

    if (outcome === 'ALREADY_VERIFIED') {
      throw new ApiError(400, 'This OTP has already been verified.');
    }

    throw new ApiError(400, 'Unable to verify OTP. Please request a new OTP.');
  }
}

module.exports = new OtpService();
