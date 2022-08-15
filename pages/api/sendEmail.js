require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = (option) => {
  const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com', // hostname
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3',
    },
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOption = {
    from: option.from,
    to: option.to,
    subject: option.subject,
    html: option.html,
  };

  transport.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
