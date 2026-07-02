import { describe, expect, it } from "vitest";

import { createContactInquiryId, validateContactForm } from "@/lib/contact";

describe("contact form validation", () => {
  it("accepts a complete project inquiry and normalizes safe fields", () => {
    const result = validateContactForm({
      name: "  Ada Lovelace  ",
      email: "  ADA@Example.COM ",
      company: " NAVARICK Labs ",
      projectType: "Complete Brand & Website",
      budgetRange: "$3,000 - $5,000",
      projectDetails: "We need a clearer identity system and website direction.",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toMatchObject({
        name: "Ada Lovelace",
        email: "ada@example.com",
        company: "NAVARICK Labs",
        projectType: "Complete Brand & Website",
        budgetRange: "$3,000 - $5,000",
      });
    }
  });

  it("allows company to be omitted", () => {
    const result = validateContactForm({
      name: "Ada Lovelace",
      email: "ada@example.com",
      projectType: "Brand Identity",
      budgetRange: "$5,000+",
      projectDetails: "We need a new identity system.",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeUndefined();
    }
  });

  it("rejects missing required fields", () => {
    const result = validateContactForm({});

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toMatchObject({
        name: "Please add a contact name.",
        email: "Please add an email address.",
        projectType: "Please choose a project type.",
        budgetRange: "Please choose a planning range.",
        projectDetails: "Please share a little context for the project.",
      });
    }
  });

  it("rejects invalid email, project type, and budget range values", () => {
    const result = validateContactForm({
      name: "Ada Lovelace",
      email: "not-an-email",
      projectType: "Mystery Work",
      budgetRange: "Unlimited",
      projectDetails: "We need a project.",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors).toMatchObject({
        email: "Please enter a valid email address.",
        projectType: "Please choose one of the listed project types.",
        budgetRange: "Please choose one of the listed planning ranges.",
      });
    }
  });

  it("creates a non-secret inquiry identifier with a NAV prefix", () => {
    expect(createContactInquiryId()).toMatch(/^NAV-\d{14}-[A-Z0-9]{6}$/);
  });
});
