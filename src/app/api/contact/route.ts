import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,20}$/;

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email?.trim() ?? "");
}

function validatePhone(phone: string): boolean {
  if (!phone?.trim()) return true;
  return PHONE_REGEX.test(phone.trim());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email, phone, message } = body;

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!fullName?.trim()) {
      errors.fullName = "Full name is required";
    } else if (fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters";
    }

    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (phone?.trim() && !validatePhone(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!message?.trim()) {
      errors.message = "Message is required";
    } else if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_EMAIL || user;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: port ? parseInt(port, 10) : 587,
      secure: port === "465",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Klinexia Contact" <${user}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `Contact form: ${fullName.trim()}${company?.trim() ? ` (${company.trim()})` : ""}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${fullName.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        ${company?.trim() ? `<p><strong>Company:</strong> ${company.trim()}</p>` : ""}
        ${phone?.trim() ? `<p><strong>Phone:</strong> ${phone.trim()}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br>")}</p>
      `,
      text: `
New contact form submission

Name: ${fullName.trim()}
Email: ${email.trim()}
${company?.trim() ? `Company: ${company.trim()}\n` : ""}${phone?.trim() ? `Phone: ${phone.trim()}\n` : ""}

Message:
${message.trim()}
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
