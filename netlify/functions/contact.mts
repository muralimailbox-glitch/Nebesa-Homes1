import type { Context } from "@netlify/functions";
import nodemailer from "nodemailer";

export default async (request: Request, context: Context) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" },
    });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, interest, message } = body;

    if (!firstName || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), { status: 400 });
    }

    // SMTP — Office365 (GoDaddy/Proofpoint routes through M365)
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER || "info@nebesahomes.au",
        pass: process.env.SMTP_PASS || "",
      },
      tls: { rejectUnauthorized: false },
    });

    const fullName = `${firstName} ${lastName || ""}`.trim();

    // Email to Nebesa Homes
    await transporter.sendMail({
      from: `"Nebesa Homes Website" <${process.env.SMTP_USER || "info@nebesahomes.au"}>`,
      to: "nebesahomes@gmail.com",
      replyTo: email,
      subject: `New Enquiry: ${interest || "General"} — ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <h2 style="color:#3D4F5F;border-bottom:3px solid #FFB800;padding-bottom:10px;">New Website Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;margin:16px 0;">
            <tr><td style="padding:8px 0;font-weight:bold;color:#3D4F5F;width:140px;">Name:</td><td style="padding:8px 0;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#3D4F5F;">Email:</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;color:#3D4F5F;">Phone:</td><td style="padding:8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
            <tr><td style="padding:8px 0;font-weight:bold;color:#3D4F5F;">Interest:</td><td style="padding:8px 0;">${interest || "Not specified"}</td></tr>
          </table>
          <div style="background:#f5f5f5;border-radius:8px;padding:16px;margin:16px 0;">
            <p style="font-weight:bold;color:#3D4F5F;margin:0 0 8px;">Message:</p>
            <p style="margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <hr style="border:none;border-top:1px solid #ddd;margin:20px 0;" />
          <p style="color:#999;font-size:12px;">This enquiry was submitted via the Nebesa Homes website contact form.</p>
        </div>
      `,
    });

    // Auto-reply to the customer
    await transporter.sendMail({
      from: `"Nebesa Homes" <${process.env.SMTP_USER || "info@nebesahomes.au"}>`,
      to: email,
      subject: "Thank you for contacting Nebesa Homes",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <h2 style="color:#3D4F5F;">Thank you, ${firstName}!</h2>
          <p>We've received your enquiry and will get back to you within 24 hours.</p>
          <div style="background:#f5f5f5;border-radius:8px;padding:16px;margin:16px 0;border-left:4px solid #FFB800;">
            <p style="margin:0;"><strong>Your interest:</strong> ${interest || "General enquiry"}</p>
          </div>
          <p>In the meantime, feel free to browse our <a href="https://nebesahomes.au/projects" style="color:#FFB800;">completed projects</a> or download our <a href="https://nebesahomes.au/inclusions" style="color:#FFB800;">standard inclusions</a>.</p>
          <p style="margin-top:24px;">Kind regards,<br/><strong>Nebesa Homes</strong><br/>Builder Licence 380365C | HIA Member<br/><a href="mailto:info@nebesahomes.au">info@nebesahomes.au</a></p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Enquiry sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ error: "Failed to send enquiry. Please email us directly at info@nebesahomes.au" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
