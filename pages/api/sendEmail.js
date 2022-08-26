require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = (option) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REF_TOKEN,
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
