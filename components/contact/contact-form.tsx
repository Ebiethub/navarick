"use client";

import { type FormEvent, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  BUDGET_RANGES,
  type ContactApiResponse,
  type ContactFormErrors,
  type ContactFormInput,
  PROJECT_TYPES,
  validateContactForm,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const initialFormState: ContactFormInput = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budgetRange: "",
  projectDetails: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactField({
  as = "input",
  error,
  help,
  id,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  as?: "input" | "textarea";
  error?: string;
  help: string;
  id: keyof ContactFormInput;
  label: string;
  onChange: (field: keyof ContactFormInput, value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = error ? `${helpId} ${errorId}` : helpId;

  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      {as === "textarea" ? (
        <textarea
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          id={id}
          name={id}
          onChange={(event) => onChange(id, event.target.value)}
          placeholder={placeholder}
          rows={7}
          value={value}
        />
      ) : (
        <input
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          id={id}
          name={id}
          onChange={(event) => onChange(id, event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
      <p id={helpId}>{help}</p>
      {error ? (
        <p className="contact-field__error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function RadioGroup({
  error,
  help,
  legend,
  name,
  onChange,
  options,
  value,
}: {
  error?: string;
  help: string;
  legend: string;
  name: "projectType" | "budgetRange";
  onChange: (field: keyof ContactFormInput, value: string) => void;
  options: readonly string[];
  value: string;
}) {
  const helpId = `${name}-help`;
  const errorId = `${name}-error`;
  const describedBy = error ? `${helpId} ${errorId}` : helpId;

  return (
    <fieldset aria-describedby={describedBy} className="contact-choice-group">
      <legend>{legend}</legend>
      <p id={helpId}>{help}</p>
      <div className="contact-choice-group__options">
        {options.map((option) => {
          const id = `${name}-${option.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <label className="contact-choice" htmlFor={id} key={option}>
              <input
                checked={value === option}
                id={id}
                name={name}
                onChange={() => onChange(name, option)}
                type="radio"
                value={option}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p className="contact-field__error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormInput>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Send the inquiry when the essential context is ready.",
  );

  const isSubmitting = status === "submitting";
  const statusId = "contact-form-status";

  const statusTone = useMemo(() => {
    if (status === "success") {
      return "success";
    }

    if (status === "error") {
      return "error";
    }

    return "neutral";
  }, [status]);

  function updateField(field: keyof ContactFormInput, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "submitting") {
      setStatus("idle");
      setStatusMessage("Send the inquiry when the essential context is ready.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateContactForm(formData);

    if (!validation.success) {
      setErrors(validation.errors);
      setStatus("error");
      setStatusMessage("A few details need attention before this can be sent.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setStatusMessage("Sending your inquiry...");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(validation.data),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload = (await response.json()) as ContactApiResponse;

      if (!payload.ok) {
        setStatus("error");
        setErrors(payload.error.details ?? {});
        setStatusMessage(payload.error.message);
        return;
      }

      setFormData(initialFormState);
      setStatus("success");
      setStatusMessage(`${payload.message} Reference: ${payload.inquiryId}`);
    } catch {
      setStatus("error");
      setStatusMessage("The inquiry could not be sent. Please try again, or use direct contact.");
    }
  }

  return (
    <form
      aria-busy={isSubmitting}
      aria-label="Project inquiry form"
      className={cn("contact-form", `contact-form--${statusTone}`, isSubmitting && "is-submitting")}
      onSubmit={handleSubmit}
    >
      <div className="contact-form__row">
        <ContactField
          error={errors.name}
          help="The person we should address in our reply."
          id="name"
          label="Name"
          onChange={updateField}
          placeholder="Your name"
          value={formData.name}
        />
        <ContactField
          error={errors.email}
          help="Where we should send the considered response."
          id="email"
          label="Email"
          onChange={updateField}
          placeholder="you@example.com"
          type="email"
          value={formData.email}
        />
      </div>

      <ContactField
        error={errors.company}
        help="Optional, but useful when the brand or team has a name."
        id="company"
        label="Company"
        onChange={updateField}
        placeholder="Company or project name"
        value={formData.company}
      />

      <RadioGroup
        error={errors.projectType}
        help="Choose the closest fit; the scope can be refined later."
        legend="Project Type"
        name="projectType"
        onChange={updateField}
        options={PROJECT_TYPES}
        value={formData.projectType}
      />

      <RadioGroup
        error={errors.budgetRange}
        help="Choose the range that best frames the conversation."
        legend="Budget Range"
        name="budgetRange"
        onChange={updateField}
        options={BUDGET_RANGES}
        value={formData.budgetRange}
      />

      <ContactField
        as="textarea"
        error={errors.projectDetails}
        help="Share the goal, timeline, constraints, and what needs to change."
        id="projectDetails"
        label="Project Details"
        onChange={updateField}
        placeholder="What should this project make clearer?"
        value={formData.projectDetails}
      />

      <div className="contact-form__footer">
        <p
          className={`contact-form__status contact-form__status--${statusTone}`}
          id={statusId}
          role="status"
        >
          {statusMessage}
        </p>
        <button
          aria-describedby={statusId}
          className="contact-button focus-ring"
          disabled={isSubmitting}
          type="submit"
        >
          <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
          {isSubmitting ? <span className="contact-button__loader" aria-hidden="true" /> : null}
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </button>
      </div>
    </form>
  );
}
