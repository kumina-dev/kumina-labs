"use client";

import { waitlistFormContent } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { localizedPath } from "@/lib/site";
import {
  isTesterIntent,
  TESTER_INTENTS,
  WAITLIST_FIELD_LIMITS,
} from "@/lib/waitlist";
import Link from "next/link";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type FormField =
  | "email"
  | "currentTool"
  | "pain"
  | "testerIntent";

type WaitlistResponse = {
  message?: string;
  field?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isFormField(
  value: unknown
): value is FormField {
  return (
    value === "email" ||
    value === "currentTool" ||
    value === "pain" ||
    value === "testerIntent"
  );
}

function RequiredMark({
  label,
}: {
  label: string;
}) {
  return (
    <span
      aria-hidden="true"
      className="ml-1 text-violet-300"
      title={label}
    >
      *
    </span>
  );
}

export function WaitlistForm({
  locale,
}: {
  locale: Locale;
}) {
  const copy = waitlistFormContent[locale];
  const [status, setStatus] =
    useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalidField, setInvalidField] =
    useState<FormField | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const currentToolRef =
    useRef<HTMLInputElement>(null);
  const painRef = useRef<HTMLTextAreaElement>(null);
  const testerIntentRef =
    useRef<HTMLInputElement>(null);

  function focusField(field: FormField | null) {
    const fields = {
      email: emailRef,
      currentTool: currentToolRef,
      pain: painRef,
      testerIntent: testerIntentRef,
    };

    if (field) {
      window.requestAnimationFrame(() =>
        fields[field].current?.focus()
      );
    }
  }

  function showError(
    errorMessage: string,
    field: FormField | null = null
  ) {
    setStatus("error");
    setMessage(errorMessage);
    setInvalidField(field);
    focusField(field);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: String(
        formData.get("email") ?? ""
      ).trim(),
      currentTool: String(
        formData.get("currentTool") ?? ""
      ).trim(),
      pain: String(
        formData.get("pain") ?? ""
      ).trim(),
      testerIntent: String(
        formData.get("testerIntent") ?? ""
      ).trim(),
      website: String(
        formData.get("website") ?? ""
      ).trim(),
      page:
        locale === "fi" ? "fi-paper" : "paper",
    };

    setMessage("");
    setInvalidField(null);

    if (
      !payload.email ||
      payload.email.length >
        WAITLIST_FIELD_LIMITS.email ||
      !isValidEmail(payload.email)
    ) {
      showError(copy.errors.email, "email");
      return;
    }

    if (
      payload.currentTool.length >
      WAITLIST_FIELD_LIMITS.currentTool
    ) {
      showError(
        copy.errors.currentTool,
        "currentTool"
      );
      return;
    }

    if (
      payload.pain.length >
      WAITLIST_FIELD_LIMITS.pain
    ) {
      showError(copy.errors.pain, "pain");
      return;
    }

    if (
      !isTesterIntent(payload.testerIntent)
    ) {
      showError(
        copy.errors.testerIntent,
        "testerIntent"
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = (await response
        .json()
        .catch(() => ({}))) as WaitlistResponse;

      if (!response.ok) {
        const field = isFormField(result.field)
          ? result.field
          : null;
        const localizedFieldError = field
          ? copy.errors[field]
          : null;

        showError(
          localizedFieldError ||
            (locale === "en"
              ? result.message
              : undefined) ||
            copy.errors.generic,
          field
        );
        return;
      }

      setStatus("success");
      setMessage(copy.success);
      setInvalidField(null);
      form.reset();
    } catch {
      showError(copy.errors.generic);
    }
  }

  const messageId = "waitlist-message";
  const inputClass =
    "h-12 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-violet-300/50 focus:ring-4 focus:ring-violet-400/10";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="relative min-w-0 rounded-4xl border border-white/10 bg-[#0d0d12] p-5 shadow-2xl shadow-black/30 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="waitlist-website">
          Leave this field blank
        </label>
        <input
          id="waitlist-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          maxLength={
            WAITLIST_FIELD_LIMITS.website
          }
        />
      </div>

      <div className="grid gap-5">
        <label
          className="grid gap-2"
          htmlFor="waitlist-email"
        >
          <span className="text-sm font-medium text-neutral-200">
            {copy.email}
            <RequiredMark label={copy.required} />
          </span>

          <input
            ref={emailRef}
            id="waitlist-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={
              WAITLIST_FIELD_LIMITS.email
            }
            aria-invalid={
              invalidField === "email"
            }
            aria-describedby={
              invalidField === "email"
                ? messageId
                : undefined
            }
            className={inputClass}
          />
        </label>

        <label
          className="grid gap-2"
          htmlFor="waitlist-current-tool"
        >
          <span className="text-sm font-medium text-neutral-200">
            {copy.currentTool}
          </span>

          <input
            ref={currentToolRef}
            id="waitlist-current-tool"
            name="currentTool"
            type="text"
            placeholder={
              copy.currentToolPlaceholder
            }
            maxLength={
              WAITLIST_FIELD_LIMITS.currentTool
            }
            aria-invalid={
              invalidField === "currentTool"
            }
            aria-describedby={
              invalidField === "currentTool"
                ? messageId
                : undefined
            }
            className={inputClass}
          />
        </label>

        <label
          className="grid gap-2"
          htmlFor="waitlist-pain"
        >
          <span className="text-sm font-medium text-neutral-200">
            {copy.pain}
          </span>

          <textarea
            ref={painRef}
            id="waitlist-pain"
            name="pain"
            rows={4}
            placeholder={copy.painPlaceholder}
            maxLength={
              WAITLIST_FIELD_LIMITS.pain
            }
            aria-invalid={
              invalidField === "pain"
            }
            aria-describedby={
              invalidField === "pain"
                ? messageId
                : undefined
            }
            className="resize-y rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-base leading-7 text-white outline-none transition placeholder:text-neutral-500 focus:border-violet-300/50 focus:ring-4 focus:ring-violet-400/10"
          />
        </label>

        <fieldset
          className="grid gap-3"
          aria-invalid={
            invalidField === "testerIntent"
          }
          aria-describedby={
            invalidField === "testerIntent"
              ? messageId
              : undefined
          }
        >
          <legend className="text-sm font-medium text-neutral-200">
            {copy.testerIntent}
            <RequiredMark label={copy.required} />
          </legend>

          {TESTER_INTENTS.map(
            (value, index) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/5"
              >
                <input
                  ref={
                    index === 0
                      ? testerIntentRef
                      : undefined
                  }
                  type="radio"
                  name="testerIntent"
                  value={value}
                  required
                  className="size-4 accent-violet-300"
                />
                {copy.testerLabels[index]}
              </label>
            )
          )}
        </fieldset>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-1 h-12 rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading"
            ? copy.submitting
            : copy.submit}
        </button>

        {message ? (
          <p
            id={messageId}
            role={
              status === "error"
                ? "alert"
                : "status"
            }
            aria-live={
              status === "error"
                ? "assertive"
                : "polite"
            }
            className={
              status === "success"
                ? "text-sm leading-6 text-emerald-300"
                : "text-sm leading-6 text-red-300"
            }
          >
            {message}
          </p>
        ) : null}

        <p className="text-sm leading-6 text-neutral-400">
          <span className="text-violet-300">
            *
          </span>{" "}
          {copy.requiredNote}
        </p>

        <p className="text-sm leading-6 text-neutral-500">
          {copy.privacyPrefix}{" "}
          <Link
            href={localizedPath(
              locale,
              "/privacy"
            )}
            className="font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-4 transition hover:text-white"
          >
            {copy.privacyLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
