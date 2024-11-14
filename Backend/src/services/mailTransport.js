// Import the Nodemailer transport from mailTransport.js
require('dotenv').config();
const nodemailer = require('nodemailer');
// Create a Nodemailer transport instance with environment variables
const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 2525, // Default to 2525 if not specified
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD,
  },
});
// Example: Sending an email
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transport.sendMail({
      from: process.env.SMTP_FROM_ADDRESS, // Sender address
      to: to, // Recipient address
      subject: subject, // Subject line
      text: text, // Plain text body
    });

    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};

module.exports = sendEmail; // Export the sendEmail function for use in other files
