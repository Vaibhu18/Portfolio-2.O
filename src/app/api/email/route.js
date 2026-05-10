export const runtime = "nodejs";

import nodemailer from "nodemailer";

function validateInput({ name, email, message }) {
  if (!name || !email || !message) {
    return "All fields are required.";
  }

  if (name.length < 2) {
    return "Name is too short.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }

  return null;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body || {};

    const error = validateInput({ name, email, message });
    if (error) {
      return Response.json({ success: false, message: error });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vcode.dev18@gmail.com",
        pass: "ulsv ynhy unfo ckzt",
      },
    });

    const htmlContent = `<div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>`;

    await transporter.sendMail({
      from: `Portfolio Contact vcode.dev18@gmail.com`,
      replyTo: email,
      to: "vcode.dev18@gmail.com",
      subject: `New Message from ${name}`,
      html: htmlContent,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return Response.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}
