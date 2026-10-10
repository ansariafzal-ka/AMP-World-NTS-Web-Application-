/**
 * SMS Gateway Service
 * Handles DLT-compliant SMS sending via SMSJust gateway.
 */
class SmsService {
  /**
   * Sends an OTP SMS to a 10-digit mobile number.
   * @param {string} mobile 10-digit mobile number
   * @param {string} otp 4-6 digit OTP code
   * @returns {Promise<{ success: boolean, data?: any, error?: string }>}
   */
  async sendOtpSms(mobile, otp) {
    const cleanMobile = String(mobile || '').replace(/\D/g, '').slice(-10);
    const baseUrl = process.env.SMS_BASE_URL || 'https://smsjust.com/sms/user/urlsms.php';
    const apiKey = process.env.SMS_API_KEY;
    const senderId = process.env.SMS_SENDER_ID || 'AMPNTS';
    const templateId = process.env.SMS_DLT_TEMPLATE_ID;

    // Exact DLT-approved template text for Template ID 1107169951810880541
    const message = `Your OTP is ${otp} to register/access AMP World App for the National Talent Search. OTP is valid for 10 minutes. Regards, Team AMP`;

    console.log(`[SMS Service] Dispatching OTP to ${cleanMobile} via SMSJust (Sender: ${senderId}, Template: ${templateId})`);

    if (!apiKey) {
      console.warn('[SMS Service] Warning: SMS_API_KEY not configured in .env. Logging OTP in dev console:', otp);
      return { success: true, devMode: true, message: 'SMS_API_KEY not configured. OTP logged to console.' };
    }

    try {
      const url = new URL(baseUrl);
      url.searchParams.set('apikey', apiKey);
      url.searchParams.set('dest_mobileno', cleanMobile);
      url.searchParams.set('message', message);
      url.searchParams.set('senderid', senderId);
      url.searchParams.set('response', 'Y');
      if (templateId) {
        url.searchParams.set('template_id', templateId);
        url.searchParams.set('templateid', templateId);
      }

      const response = await fetch(url.toString(), { method: 'GET' });
      const responseText = await response.text();
      console.log(`[SMS Service] Gateway response for ${cleanMobile}:`, responseText);

      return {
        success: true,
        response: responseText,
      };
    } catch (error) {
      console.error(`[SMS Service] Failed to send SMS to ${cleanMobile}:`, error.message);
      // In development, do not completely block the flow if external SMS gateway has connectivity issues
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

module.exports = new SmsService();
