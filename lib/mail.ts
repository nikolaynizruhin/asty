import nodemailer from 'nodemailer';

export default async function sendEmail(subject: string, text: string, attachments: { filename: string, content: Buffer }[] = []) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: `"ASTY Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject,
    text,
    attachments,
  });
}
