const nodemailer = require('nodemailer');

const sendEmailEthereal = async (req, res) => {

  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASSWORD
      }
    });
    
    let info = await transporter.sendMail({
      from: '"MURATCAY - Ethereal" <murtcay@gmail.com>',
      to: 'bar@example.com',
      subject: 'Hello',
      html: '<h2>Hello from Node.js. Sending Email using Ethereal</h2>',
    });
    
    res.json(info);
  } catch (err) {
    res.json({
      error: err.message
    });
  }
};

const sendEmailSendGrid = async (req, res) => {
  res.send('Email Sendgrid');
};

module.exports = {
  sendEmailEthereal,
  sendEmailSendGrid
};