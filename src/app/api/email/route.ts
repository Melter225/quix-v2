import { NextResponse, type NextRequest } from "next/server"
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { to, message } = await request.json()

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const htmlMessage = `
    <div style="padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; border: 2px solid #171717; border-radius: 10px;">
        <div style="text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; border-bottom: 2px solid #bfbdbd; background-color: #dedede; padding: 20px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <img src="/QuixLogo.png" alt="logo" />
            <h1 style="color: black;">Quix Verification Code</h1>
          </div>
          <div style="padding: 20px; text-align: center;">
            <br />
            <p style="color: black;">Hi, <br /> <br /> Your email address was listed when signing up for a Quix account. To continue signing up, please enter the following code. Your six-digit code is:</p>
            <h1 style="color: black; font-size: 45px; background-color: #dedede; border-radius: 10px;">${message}</h1>
            <a style="display: inline-block; padding: 10px 20px; background-color: #059669; color: #fff; text-decoration: none; border-radius: 10px; transition: background-color 0.3s, color 0.3s; font-weight: bold; margin-bottom: 10px; font-size: 20px;" href="quix-v2.vercel.app/signup">Open Quix</a>
            <p style="color: black;">It will expire in 60 seconds, but after its expiration, you can request another code. <strong>Do not forward or give this code to anyone.</strong> <br /> <br /> You are receiving this email because you are currently creating a Quix account. If you did not request this code, you can ignore this email.<br /> <br /> Sincerely, <br /> The Quix Team</p>
          </div>
        </div>
        <div style="text-align: left; margin-left: 10px;">
          <p style="color: #a8a8a8; font-size: 11px;">Do not reply to this email. <br /> © Quix, 2024</p>
        </div>
      </div>
    </div>
  `;

  const mailOptions: Mail.Options = {
    from: process.env.SMTP_USERNAME,
    to: to,
    subject: 'Email Verification Code',
    html: htmlMessage,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}