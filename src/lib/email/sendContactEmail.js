import nodemailer from "nodemailer";

/**
 * Validates visitor contact input fields.
 */
export function validateContactInput({ name, email, message }) {
  if (!name || !email || !message) {
    return "All fields (name, email, message) are required.";
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return "Name must be between 2 and 100 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 254) {
    return "Please enter a valid email address.";
  }

  if (trimmedMessage.length < 5 || trimmedMessage.length > 3000) {
    return "Message must be between 5 and 3000 characters.";
  }

  return null;
}

/**
 * Sends a contact message email to Vaibhav Shinde using Nodemailer.
 * Reused across both the Contact Form endpoint and the VCode AI Chatbot.
 */
export async function sendContactEmail({ name, email, message, source = "Portfolio Contact Form" }) {
  const error = validateContactInput({ name, email, message });
  if (error) {
    return { success: false, message: error };
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  const user = process.env.EMAIL_USER || "vcode.dev18@gmail.com";
  const pass = process.env.EMAIL_PASS || "ulsv ynhy unfo ckzt";
  const recipient = process.env.EMAIL_TO || "vcode.dev18@gmail.com";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0d1117; color: #f0f6fc; border-radius: 12px; border: 1px solid #30363d;">
      <div style="border-bottom: 1px solid #21262d; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #58a6ff; font-size: 20px;">✨ New Portfolio Contact</h2>
        <span style="font-size: 12px; color: #8b949e; font-family: monospace;">Source: ${source}</span>
      </div>
      
      <div style="margin-bottom: 16px;">
        <span style="display: block; font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; font-family: monospace;">Visitor Name</span>
        <strong style="font-size: 16px; color: #ffffff;">${trimmedName}</strong>
      </div>

      <div style="margin-bottom: 16px;">
        <span style="display: block; font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; font-family: monospace;">Email Address</span>
        <a href="mailto:${trimmedEmail}" style="color: #58a6ff; text-decoration: none; font-size: 15px;">${trimmedEmail}</a>
      </div>

      <div style="margin-bottom: 20px; padding: 16px; background-color: #161b22; border-radius: 8px; border: 1px solid #30363d;">
        <span style="display: block; font-size: 12px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; font-family: monospace; margin-bottom: 8px;">Message Content</span>
        <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #c9d1d9;">${trimmedMessage}</p>
      </div>

      <div style="border-top: 1px solid #21262d; padding-top: 12px; text-align: center;">
        <span style="font-size: 11px; color: #484f58; font-family: monospace;">Sent via VCode Portfolio System • ${new Date().toUTCString()}</span>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      replyTo: trimmedEmail,
      to: recipient,
      subject: `Portfolio Contact — ${trimmedName}`,
      html: htmlContent,
      text: `New Portfolio Message from ${trimmedName} (${trimmedEmail}):\n\n${trimmedMessage}\n\nSource: ${source}`,
    });

    return {
      success: true,
      message: "Message delivered successfully!",
    };
  } catch (err) {
    console.error("sendContactEmail Error:", err);
    return {
      success: false,
      message: "Failed to dispatch email transmission. Please try again later.",
    };
  }
}
