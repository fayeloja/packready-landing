import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  business: string;
  message: string;
};

type ResendSuccessResponse = {
  id: string;
};

type ResendErrorResponse = {
  message?: string;
  name?: string;
};

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailContent({
  name,
  phone,
  business,
  message,
}: ContactPayload) {
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeBusiness = business ? escapeHtml(business) : "Not provided";
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const subject = `New PackReady quote request from ${name}`;

  const text = [
    "New quote request received from the PackReady website.",
    "",
    `Name: ${name}`,
    `Phone / WhatsApp: ${phone}`,
    `Business: ${business || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New quote request</h2>
      <p style="margin: 0 0 16px;">
        A new contact form submission was sent from the PackReady landing page.
      </p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Name</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Phone / WhatsApp</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600;">Business</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeBusiness}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 600; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${safeMessage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const business = body.business?.trim() ?? "";
    const message = body.message?.trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const resendToEmail = process.env.RESEND_TO_EMAIL;

    if (!resendApiKey || !resendFromEmail || !resendToEmail) {
      console.error("Missing Resend configuration.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const emailContent = buildEmailContent({ name, phone, business, message });

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [resendToEmail],
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
      }),
    });

    if (!resendResponse.ok) {
      const resendError =
        (await resendResponse.json().catch(() => null)) as ResendErrorResponse | null;

      console.error("Resend email send failed.", {
        status: resendResponse.status,
        error: resendError,
      });

      return NextResponse.json(
        { error: "We could not send your quote request right now. Please try again." },
        { status: 502 }
      );
    }

    const resendData =
      (await resendResponse.json()) as ResendSuccessResponse;

    console.log("Quote request email sent.", {
      emailId: resendData.id,
      name,
      phone,
      business,
    });

    return NextResponse.json(
      { success: true, message: "Quote request received!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
