import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

import dotenv from "dotenv";
dotenv.config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  },
});

// POST route to handle form submission
router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: email,
      to: process.env.USER_MAIL, // Your email address to receive the message
      subject: `Contact form submission from BookVerse`,
      text: message,
    });

    // console.log("Message sent: %s", info.messageId);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // console.error("Error sending email:", error);
    res.status(500).send({ success: false, message: 'Failed to send email.' });
  }
});

export default router;
