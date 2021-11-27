const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

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
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'mailtestuser8@gmail.com', // Change to your recipient
      from: process.env.MAIL_ACCOUNT, // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      html: 'Hello from <strong>Node.js</strong>. Sending Email using SendGrid',
    };
    
    const info = sgMail.send(msg);
    res.json(info);

  } catch (err) {
    res.json({
      error: err.message
    });
  }
  res.send('Email Sendgrid');
};

module.exports = {
  sendEmailEthereal,
  sendEmailSendGrid
};