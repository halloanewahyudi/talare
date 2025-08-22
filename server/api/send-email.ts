import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    to: string;
    subject: string;
    message: string;
  }>(event);

  if (!body.to || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields (to, subject, message)",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@tala-re.com>", // pastikan domain sudah terverifikasi di Resend
      to: [body.to],
      subject: body.subject,
      html: body.message,
    });

    if (error) {
      console.error("Resend error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to send email",
      });
    }

    return { success: true, data };
  } catch (err) {
    console.error("Server error:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Server error",
    });
  }
});
