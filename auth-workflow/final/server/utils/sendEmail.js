const nodemailer = require('nodemailer');
const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Elefante Coorp. 👻" <admin@elefante.com>', // sender address
    to: 'user@email.com', // list of receivers
    subject: 'Testing Email  ✔', // Subject line
    text: 'Hello from Elefante!', // plain text body
    html: '<b>Testing Email?</b>', // html body
  });
};

module.exports = sendEmail;
