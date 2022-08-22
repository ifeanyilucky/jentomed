require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = (option) => {
  const transport = nodemailer.createTransport({
    service: '"Outlook365"',
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
