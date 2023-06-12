const nodemailer = require("nodemailer");

async function sendMail({ to, subject, html }) {
  const from = "dovgusha.m@gmail.com";
  const email = {
    to,
    from,
    subject,
    html,
  };
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  await transport.sendMail(email);
}

module.exports = sendMail;
