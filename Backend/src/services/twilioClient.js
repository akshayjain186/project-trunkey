// otpService.js (or in your relevant service/controller file)
const twilio = require('twilio');
require('dotenv').config();

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendTwilioOtp = async (phone, otp) => {
  try {
    const message = await twilioClient.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: phone, // Recipient phone number
    });

    console.log('OTP sent successfully:', message.sid);
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('Failed to send OTP:', error);
    return { success: false, error: error.message };
  }
};

module.exports = sendTwilioOtp;
// Example usage
// sendOtp('+1234567890', '123456');
