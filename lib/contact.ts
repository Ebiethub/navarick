export const PROJECT_TYPES = [
  "Brand Identity",
  "Website Design",
  "Web Development",
  "UI/UX Design",
  "Complete Brand & Website",
] as const;

export const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];

export type ContactFormInput = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  projectDetails: string;
};

export type ContactFormSubmission = {
  name: string;
  email: string;
  company?: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  projectDetails: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

export type ContactValidationResult =
  | { success: true; data: ContactFormSubmission }
  | { success: false; errors: ContactFormErrors };

export type ContactApiResponse =
  | {
      ok: true;
      status: "received" | "fallback";
      message: string;
      inquiryId: string;
    }
  | {
      ok: false;
      error: {
        code: "VALIDATION_ERROR" | "UNSUPPORTED_MEDIA_TYPE" | "SERVER_ERROR";
        message: string;
        details?: ContactFormErrors;
      };
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const maxLengths = {
  name: 120,
  email: 254,
  company: 160,
  projectDetails: 4000,
} as const;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isProjectType(value: string): value is ProjectType {
  return PROJECT_TYPES.includes(value as ProjectType);
}

function isBudgetRange(value: string): value is BudgetRange {
  return BUDGET_RANGES.includes(value as BudgetRange);
}

function getField(input: unknown, field: keyof ContactFormInput) {
  if (!input || typeof input !== "object") {
    return "";
  }

  return asTrimmedString((input as Partial<Record<keyof ContactFormInput, unknown>>)[field]);
}

export function validateContactForm(input: unknown): ContactValidationResult {
  const data: ContactFormInput = {
    name: getField(input, "name"),
    email: getField(input, "email").toLowerCase(),
    company: getField(input, "company"),
    projectType: getField(input, "projectType"),
    budgetRange: getField(input, "budgetRange"),
    projectDetails: getField(input, "projectDetails"),
  };

  const errors: ContactFormErrors = {};

  if (!data.name) {
    errors.name = "Please add a contact name.";
  } else if (data.name.length > maxLengths.name) {
    errors.name = `Name must be ${maxLengths.name} characters or fewer.`;
  }

  if (!data.email) {
    errors.email = "Please add an email address.";
  } else if (data.email.length > maxLengths.email || !emailPattern.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.company.length > maxLengths.company) {
    errors.company = `Company must be ${maxLengths.company} characters or fewer.`;
  }

  if (!data.projectType) {
    errors.projectType = "Please choose a project type.";
  } else if (!isProjectType(data.projectType)) {
    errors.projectType = "Please choose one of the listed project types.";
  }

  if (!data.budgetRange) {
    errors.budgetRange = "Please choose a planning range.";
  } else if (!isBudgetRange(data.budgetRange)) {
    errors.budgetRange = "Please choose one of the listed planning ranges.";
  }

  if (!data.projectDetails) {
    errors.projectDetails = "Please share a little context for the project.";
  } else if (data.projectDetails.length > maxLengths.projectDetails) {
    errors.projectDetails = `Project details must be ${maxLengths.projectDetails} characters or fewer.`;
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name: data.name,
      email: data.email,
      company: data.company || undefined,
      projectType: data.projectType as ProjectType,
      budgetRange: data.budgetRange as BudgetRange,
      projectDetails: data.projectDetails,
    },
  };
}

export function createContactInquiryId(date = new Date()) {
  const stamp = date.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `NAV-${stamp}-${randomPart}`;
}
