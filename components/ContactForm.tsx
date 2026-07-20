"use client";

import { CONTACT_FIELD_LIMITS, ContactField, isContactField, isValidEmail } from "@/lib/contact";
import { contactFormContent } from "@/lib/content";
import { localizedPath, siteConfig, type Locale } from "@/lib/site";
import Link from "next/link";
import { FormEvent, RefObject, useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ContactResponse = {
  message?: string;
  field?: unknown;
};

function RequiredMark({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="ml-1 text-(--accent-strong)"
      title={label}
    >
      *
    </span>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = contactFormContent[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalidField, setInvalidField] =
    useState<ContactField | null>(null);

  const startedAtRef = useRef(0);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const currentWebsiteRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const fieldRefs: Record<
    ContactField,
    RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  > = {
    name: nameRef,
    email: emailRef,
    businessName: businessNameRef,
    currentWebsite: currentWebsiteRef,
    message: messageRef,
  };

  function showError(
    errorMessage: string,
    field: ContactField | null = null
  ) {
    setStatus("error");
    setMessage(errorMessage);
    setInvalidField(field);

    if (field) {
      window.requestAnimationFrame(() =>
        fieldRefs[field].current?.focus()
      );
    }
  }

  function fieldError(field: ContactField) {
    return copy.validation[field];
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      businessName: String(
        formData.get("businessName") ?? ""
      ).trim(),
      currentWebsite: String(
        formData.get("currentWebsite") ?? ""
      ).trim(),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      locale,
      startedAt: startedAtRef.current,
    };

    setMessage("");
    setInvalidField(null);

    if (
      !payload.name ||
      payload.name.length > CONTACT_FIELD_LIMITS.name
    ) {
      showError(copy.validation.name, "name");
      return;
    }

    if (
      !payload.email ||
      payload.email.length > CONTACT_FIELD_LIMITS.email ||
      !isValidEmail(payload.email)
    ) {
      showError(copy.validation.email, "email");
      return;
    }

    if (
      payload.businessName.length >
      CONTACT_FIELD_LIMITS.businessName
    ) {
      showError(copy.validation.businessName, "businessName");
      return;
    }

    if (
      payload.currentWebsite.length >
      CONTACT_FIELD_LIMITS.currentWebsite
    ) {
      showError(copy.validation.currentWebsite, "currentWebsite");
      return;
    }

    if (
      !payload.message ||
      payload.message.length > CONTACT_FIELD_LIMITS.message
    ) {
      showError(copy.validation.message, "message");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response
        .json()
        .catch(() => ({}))) as ContactResponse;

      if (!response.ok) {
        const field = isContactField(result.field)
          ? result.field
          : null;

        showError(
          field ? fieldError(field) : copy.validation.generic,
          field
        );
        return;
      }

      setStatus("success");
      setMessage(copy.success);
      setInvalidField(null);
      form.reset();
      startedAtRef.current = Date.now();
    } catch {
      showError(copy.validation.generic);
    }
  }

  const messageId = "contact-form-message";
  const inputClass =
    "h-12 rounded-2xl border border-white/12 bg-black/25 px-4 text-base text-[var(--foreground)] outline-none transition placeholder:text-[#817666] focus:border-[var(--accent)]/60 focus:ring-4 focus:ring-[var(--accent)]/10";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="relative min-w-0 rounded-4xl border border-white/12 bg-[#15110d] p-5 shadow-2xl shadow-black/25 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-company">
          Leave this field blank
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          maxLength={CONTACT_FIELD_LIMITS.company}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2" htmlFor="contact-name">
          <span className="text-sm font-medium text-[#ddd3c5]">
            {copy.name}
            <RequiredMark label={copy.required} />
          </span>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            placeholder={copy.namePlaceholder}
            autoComplete="name"
            required
            maxLength={CONTACT_FIELD_LIMITS.name}
            aria-invalid={invalidField === "name"}
            aria-describedby={
              invalidField === "name" ? messageId : undefined
            }
            className={inputClass}
          />
        </label>

        <label className="grid gap-2" htmlFor="contact-email">
          <span className="text-sm font-medium text-[#ddd3c5]">
            {copy.email}
            <RequiredMark label={copy.required} />
          </span>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            required
            maxLength={CONTACT_FIELD_LIMITS.email}
            aria-invalid={invalidField === "email"}
            aria-describedby={
              invalidField === "email" ? messageId : undefined
            }
            className={inputClass}
          />
        </label>

        <label
          className="grid gap-2"
          htmlFor="contact-business-name"
        >
          <span className="text-sm font-medium text-[#ddd3c5]">
            {copy.businessName}
          </span>
          <input
            ref={businessNameRef}
            id="contact-business-name"
            name="businessName"
            type="text"
            placeholder={copy.businessNamePlaceholder}
            autoComplete="organization"
            maxLength={CONTACT_FIELD_LIMITS.businessName}
            aria-invalid={invalidField === "businessName"}
            aria-describedby={
              invalidField === "businessName"
                ? messageId
                : undefined
            }
            className={inputClass}
          />
        </label>

        <label
          className="grid gap-2"
          htmlFor="contact-current-website"
        >
          <span className="text-sm font-medium text-[#ddd3c5]">
            {copy.currentWebsite}
          </span>
          <input
            ref={currentWebsiteRef}
            id="contact-current-website"
            name="currentWebsite"
            type="url"
            placeholder={copy.currentWebsitePlaceholder}
            inputMode="url"
            maxLength={CONTACT_FIELD_LIMITS.currentWebsite}
            aria-invalid={invalidField === "currentWebsite"}
            aria-describedby={
              invalidField === "currentWebsite"
                ? messageId
                : undefined
            }
            className={inputClass}
          />
        </label>

        <label
          className="grid gap-2 sm:col-span-2"
          htmlFor="contact-message"
        >
          <span className="text-sm font-medium text-[#ddd3c5]">
            {copy.message}
            <RequiredMark label={copy.required} />
          </span>
          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            rows={7}
            placeholder={copy.messagePlaceholder}
            required
            maxLength={CONTACT_FIELD_LIMITS.message}
            aria-invalid={invalidField === "message"}
            aria-describedby={
              invalidField === "message" ? messageId : undefined
            }
            className="resize-y rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-base leading-7 text-(--foreground) outline-none transition placeholder:text-[#817666] focus:border-(--accent)/60 focus:ring-4 focus:ring-(--accent)/10"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-(--accent) px-6 text-sm font-semibold text-(--accent-ink) transition hover:bg-(--accent-strong) disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? copy.submitting : copy.submit}
      </button>

      {message ? (
        <div
          id={messageId}
          role={status === "error" ? "alert" : "status"}
          aria-live={
            status === "error" ? "assertive" : "polite"
          }
          className={
            status === "success"
              ? "mt-5 text-sm leading-6 text-emerald-300"
              : "mt-5 text-sm leading-6 text-red-300"
          }
        >
          <p>{message}</p>

          {status === "error" ? (
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-2 inline-block font-medium text-(--foreground) underline decoration-white/30 underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
          ) : null}
        </div>
      ) : null}

      <p className="mt-6 text-sm leading-6 text-[#968a7a]">
        {copy.privacyPrefix}{" "}
        <Link
          href={localizedPath(locale, "/privacy")}
          className="font-medium text-[#d8cec0] underline decoration-white/25 underline-offset-4 transition hover:text-white"
        >
          {copy.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
