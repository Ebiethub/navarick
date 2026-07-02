import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/contact/route";
import type { ContactApiResponse } from "@/lib/contact";

const validInquiry = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Studio",
  projectType: "Website Design",
  budgetRange: "$1,000 - $3,000",
  projectDetails: "We need a clearer website for a new service launch.",
};

function jsonRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
}

describe("/api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("CONTACT_EMAIL_PROVIDER", "");
    vi.stubEnv("CONTACT_EMAIL_TO", "");
    vi.stubEnv("CONTACT_EMAIL_FROM", "");
    vi.stubEnv("RESEND_API_KEY", "");
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("rejects non-JSON requests", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        body: "name=Ada",
        headers: { "Content-Type": "text/plain" },
        method: "POST",
      }),
    );
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(415);
    expect(payload.ok).toBe(false);
    if (!payload.ok) {
      expect(payload.error.code).toBe("UNSUPPORTED_MEDIA_TYPE");
    }
  });

  it("returns field errors for invalid submissions", async () => {
    const response = await POST(jsonRequest({ email: "invalid" }));
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(422);
    expect(payload.ok).toBe(false);
    if (!payload.ok) {
      expect(payload.error.code).toBe("VALIDATION_ERROR");
      expect(payload.error.details).toMatchObject({
        name: "Please add a contact name.",
        email: "Please enter a valid email address.",
      });
    }
  });

  it("returns a safe fallback when email delivery is not configured", async () => {
    const response = await POST(jsonRequest(validInquiry));
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(202);
    expect(payload.ok).toBe(true);
    if (payload.ok) {
      expect(payload.status).toBe("fallback");
      expect(payload.inquiryId).toMatch(/^NAV-\d{14}-[A-Z0-9]{6}$/);
      expect(payload.message).toContain("email delivery is not configured");
    }
  });

  it("sends the inquiry through Resend when email delivery is configured", async () => {
    vi.stubEnv("CONTACT_EMAIL_PROVIDER", "resend");
    vi.stubEnv("CONTACT_EMAIL_TO", "studio@example.com");
    vi.stubEnv("CONTACT_EMAIL_FROM", "NAVARICK <hello@example.com>");
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ id: "email_123" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }),
    );

    const response = await POST(jsonRequest(validInquiry));
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(202);
    expect(payload.ok).toBe(true);
    if (payload.ok) {
      expect(payload.status).toBe("received");
      expect(payload.inquiryId).toMatch(/^NAV-\d{14}-[A-Z0-9]{6}$/);
    }
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer re_test_key",
          "Content-Type": "application/json",
        }),
        method: "POST",
      }),
    );

    const [, requestInit] = fetchMock.mock.calls[0];
    const body = JSON.parse(String(requestInit?.body)) as {
      from: string;
      html: string;
      reply_to: string;
      subject: string;
      text: string;
      to: string;
    };

    expect(body).toMatchObject({
      from: "NAVARICK <hello@example.com>",
      reply_to: validInquiry.email,
      subject: `New NAVARICK inquiry: ${validInquiry.projectType}`,
      to: "studio@example.com",
    });
    expect(body.text).toContain(validInquiry.projectDetails);
    expect(body.html).toContain("NAVARICK Project Inquiry");
  });

  it("returns a server error when Resend rejects delivery", async () => {
    vi.stubEnv("CONTACT_EMAIL_PROVIDER", "resend");
    vi.stubEnv("CONTACT_EMAIL_TO", "studio@example.com");
    vi.stubEnv("CONTACT_EMAIL_FROM", "NAVARICK <hello@example.com>");
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: "Invalid API key" }), {
        headers: { "Content-Type": "application/json" },
        status: 401,
      }),
    );

    const response = await POST(jsonRequest(validInquiry));
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(502);
    expect(payload.ok).toBe(false);
    if (!payload.ok) {
      expect(payload.error.code).toBe("SERVER_ERROR");
      expect(payload.error.message).toContain("Resend");
    }
  });

  it("returns safe Resend error details when available", async () => {
    vi.stubEnv("CONTACT_EMAIL_PROVIDER", "resend");
    vi.stubEnv("CONTACT_EMAIL_TO", "studio@example.com");
    vi.stubEnv("CONTACT_EMAIL_FROM", "NAVARICK <hello@example.com>");
    vi.stubEnv("RESEND_API_KEY", "re_test_key");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: "The sender domain is not verified." }), {
        headers: { "Content-Type": "application/json" },
        status: 403,
      }),
    );

    const response = await POST(jsonRequest(validInquiry));
    const payload = (await response.json()) as ContactApiResponse;

    expect(response.status).toBe(502);
    expect(payload.ok).toBe(false);
    if (!payload.ok) {
      expect(payload.error.message).toContain("sender domain is not verified");
    }
  });
});
