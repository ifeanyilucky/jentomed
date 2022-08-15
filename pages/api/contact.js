const sendEmail = require('./sendEmail');

export default async (req, res) => {
  const { firstName, lastName, tel, email, message } = req.body;
  const messageHtml = `
  <div>
    <p>
    ${message}
    </p>
    <ul>
    <li>Full name: ${firstName} ${lastName}</li>
    <li>Phone number: ${tel}</li>
    <li>Email: ${email}</li>
    </ul>
  </div>
    
    `;
  try {
    const submitEmail = sendEmail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `A contact form message from ${firstName} ${lastName}`,
      html: messageHtml,
    });
    res.status(200).json(submitEmail);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
