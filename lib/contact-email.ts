import type { ContactFormSubmission } from "@/lib/contact";

const resendEndpoint = "https://api.resend.com/emails";

type EmailDeliveryResult =
  | { ok: true }
  | {
      ok: false;
      message: string;
    };

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildInquiryHtml(inquiry: ContactFormSubmission, inquiryId: string) {
  const safeDetails = escapeHtml(inquiry.projectDetails).replaceAll("\n", "<br />");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#181816">
      <p style="margin:0 0 8px;color:#6f6c64;font-size:12px;letter-spacing:0.08em;text-transform:uppercase">
        NAVARICK Project Inquiry
      </p>
      <h1 style="margin:0 0 20px;font-size:22px;line-height:1.25;color:#181816">
        New inquiry from ${escapeHtml(inquiry.name)}
      </h1>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin:0 0 20px">
        <tr>
          <td style="padding:8px 0;color:#6f6c64;width:140px">Reference</td>
          <td style="padding:8px 0;color:#181816"><strong>${escapeHtml(inquiryId)}</strong></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6f6c64">Name</td>
          <td style="padding:8px 0;color:#181816">${escapeHtml(inquiry.name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6f6c64">Email</td>
          <td style="padding:8px 0;color:#181816">${escapeHtml(inquiry.email)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6f6c64">Company</td>
          <td style="padding:8px 0;color:#181816">${escapeHtml(inquiry.company ?? "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6f6c64">Project type</td>
          <td style="padding:8px 0;color:#181816">${escapeHtml(inquiry.projectType)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6f6c64">Budget range</td>
          <td style="padding:8px 0;color:#181816">${escapeHtml(inquiry.budgetRange)}</td>
        </tr>
      </table>
      <div style="padding:18px;border:1px solid #ded7c9;border-radius:8px;background:#fbfaf7">
        ${safeDetails}
      </div>
    </div>
  `;
}

function buildInquiryText(inquiry: ContactFormSubmission, inquiryId: string) {
  return [
    "NAVARICK Project Inquiry",
    "",
    `Reference: ${inquiryId}`,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company ?? "Not provided"}`,
    `Project type: ${inquiry.projectType}`,
    `Budget range: ${inquiry.budgetRange}`,
    "",
    "Project details:",
    inquiry.projectDetails,
  ].join("\n");
}

async function getResendErrorMessage(response: Response) {
  let responseText = "";

  try {
    responseText = await response.text();
  } catch {
    return `Resend could not deliver the inquiry email. Status: ${response.status}.`;
  }

  if (!responseText) {
    return `Resend could not deliver the inquiry email. Status: ${response.status}.`;
  }

  try {
    const payload = JSON.parse(responseText) as {
      error?: string;
      message?: string;
      name?: string;
    };
    const detail = payload.message ?? payload.error ?? payload.name;

    if (detail) {
      return `Resend could not deliver the inquiry email. ${detail}`;
    }
  } catch {
    return `Resend could not deliver the inquiry email. ${responseText}`;
  }

  return `Resend could not deliver the inquiry email. Status: ${response.status}.`;
}

export function hasContactEmailConfig() {
  return Boolean(
    resolveProvider() &&
      resolveContactRecipient() &&
      resolveContactSender() &&
      process.env.RESEND_API_KEY,
  );
}

function resolveProvider() {
  return process.env.CONTACT_EMAIL_PROVIDER?.trim().toLowerCase() || "resend";
}

function resolveContactRecipient() {
  return process.env.CONTACT_EMAIL_TO?.trim() || process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
}

function resolveContactSender() {
  return process.env.CONTACT_EMAIL_FROM?.trim() || process.env.RESEND_FROM_EMAIL?.trim();
}

export async function sendContactInquiryEmail(
  inquiry: ContactFormSubmission,
  inquiryId: string,
): Promise<EmailDeliveryResult> {
  const provider = resolveProvider();

  if (provider !== "resend") {
    return {
      ok: false,
      message: "Contact email provider is not supported.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = resolveContactSender();
  const to = resolveContactRecipient();

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      message: "Email delivery is missing required Resend configuration.",
    };
  }

  const response = await fetch(resendEndpoint, {
    body: JSON.stringify({
      from,
      to,
      reply_to: inquiry.email,
      subject: `New NAVARICK inquiry: ${inquiry.projectType}`,
      text: buildInquiryText(inquiry, inquiryId),
      html: buildInquiryHtml(inquiry, inquiryId),
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return {
      ok: false,
      message: await getResendErrorMessage(response),
    };
  }

  return { ok: true };
}
