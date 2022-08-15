const sendEmail = require('./sendEmail');

export default async (req, res) => {
  const { firstName, lastName, date, message, time, email, tel } = req.body;
  const messageHtml = `
    <div>
    <p>
    ${firstName} is requesting for an appointment at Jentomed Specialist Hospital with the information below
    </p>
    <br/>
    <ul>
        <li>Full name: ${firstName} ${lastName}</li>
        <li>Phone number: ${tel}</li>
        <li>Email: ${email}</li>
        <li>Appointment date: ${date}</li>
        <li>Appointment time: ${time}</li>
    </ul>
    </div>
  `;
  console.log(req.body);
  //   try {
  //     const sendAppointment = await sendEmail({
  //       from: process.env.MAIL_USER,
  //       to: process.env.MAIL_USER,
  //       subject: `${firstName} ${lastName} is requesting an appointment`,
  //       html: messageHtml,
  //     });
  //     res.status(201).json(sendAppointment);
  //   } catch (err) {
  //     console.log(err);
  //   }
};
