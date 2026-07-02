import { NextResponse } from "next/server";

import {
  type ContactApiResponse,
  createContactInquiryId,
  validateContactForm,
} from "@/lib/contact";
import { hasContactEmailConfig, sendContactInquiryEmail } from "@/lib/contact-email";

export const runtime = "nodejs";

const jsonContentType = "application/json";
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestTimestamps = new Map<string, number[]>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(request: Request) {
  if (process.env.NODE_ENV === "test") {
    return false;
  }

  const clientIp = getClientIp(request);
  const now = Date.now();
  const recentRequests = (requestTimestamps.get(clientIp) ?? []).filter(
    (timestamp) => now - timestamp < rateLimitWindowMs,
  );

  if (recentRequests.length >= maxRequestsPerWindow) {
    requestTimestamps.set(clientIp, recentRequests);
    return true;
  }

  requestTimestamps.set(clientIp, [...recentRequests, now]);
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "Too many inquiries were sent recently. Please wait a few minutes and try again.",
        },
      },
      { status: 429 },
    );
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes(jsonContentType)) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: {
          code: "UNSUPPORTED_MEDIA_TYPE",
          message: "Send the inquiry as JSON.",
        },
      },
      { status: 415 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "The inquiry could not be read.",
        },
      },
      { status: 400 },
    );
  }

  const validation = validateContactForm(body);

  if (!validation.success) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "A few details need attention before this can be sent.",
          details: validation.errors,
        },
      },
      { status: 422 },
    );
  }

  const inquiryId = createContactInquiryId();

  if (!hasContactEmailConfig()) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: true,
        status: "fallback",
        inquiryId,
        message:
          "Your inquiry was received for review, but email delivery is not configured yet. Please keep this reference for setup testing.",
      },
      { status: 202 },
    );
  }

  try {
    const delivery = await sendContactInquiryEmail(validation.data, inquiryId);

    if (!delivery.ok) {
      return NextResponse.json<ContactApiResponse>(
        {
          ok: false,
          error: {
            code: "SERVER_ERROR",
            message: delivery.message,
          },
        },
        { status: 502 },
      );
    }

    return NextResponse.json<ContactApiResponse>(
      {
        ok: true,
        status: "received",
        inquiryId,
        message: "Your inquiry was received for review. We will reply by email.",
      },
      { status: 202 },
    );
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "The inquiry could not be delivered right now. Please try again later.",
        },
      },
      { status: 502 },
    );
  }
}
