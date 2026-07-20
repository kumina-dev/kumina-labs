"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  isTesterIntent,
  TESTER_INTENTS,
  WAITLIST_FIELD_LIMITS,
} from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";
type FormField = "email" | "currentTool" | "pain" | "testerIntent";

type WaitlistResponse = {
  message?: string;
  field?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isFormField(value: unknown): value is FormField {
  return (
    value === "email" ||
    value === "currentTool" ||
    value === "pain" ||
    value === "testerIntent"
  );
}

function RequiredMark() {
  return (
    <span
      aria-hidden="true"
      className="ml-1 text-emerald-300"
      title="Required"
    >
      *
    </span>
  );
}

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [invalidField, setInvalidField] = useState<FormField | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const currentToolRef = useRef<HTMLInputElement>(null);
  const painRef = useRef<HTMLTextAreaElement>(null);
  const testerIntentRef = useRef<HTMLInputElement>(null);

  function focusField(field: FormField | null) {
    const fields = {
      email: emailRef,
      currentTool: currentToolRef,
      pain: painRef,
      testerIntent: testerIntentRef,
    };

    if (field) {
      window.requestAnimationFrame(() => fields[field].current?.focus());
    }
  }

  function showError(errorMessage: string, field: FormField | null = null) {
    setStatus("error");
    setMessage(errorMessage);
    setInvalidField(field);
    focusField(field);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      currentTool: String(formData.get("currentTool") ?? "").trim(),
      pain: String(formData.get("pain") ?? "").trim(),
      testerIntent: String(formData.get("testerIntent") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    setMessage("");
    setInvalidField(null);

    if (!payload.email) {
      showError("Please enter your email address.", "email");
      return;
    }

    if (payload.email.length > WAITLIST_FIELD_LIMITS.email) {
      showError("Email address is too long.", "email");
      return;
    }

    if (!isValidEmail(payload.email)) {
      showError("Please enter a valid email address.", "email");
      return;
    }

    if (payload.currentTool.length > WAITLIST_FIELD_LIMITS.currentTool) {
      showError("Current tool is too long.", "currentTool");
      return;
    }

    if (payload.pain.length > WAITLIST_FIELD_LIMITS.pain) {
      showError("Feedback is too long.", "pain");
      return;
    }

    if (!isTesterIntent(payload.testerIntent)) {
      showError(
        "Please choose whether you're open to testing Paper.",
        "testerIntent"
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response
        .json()
        .catch(() => ({}))) as WaitlistResponse;

      if (!response.ok) {
        const field = isFormField(result.field) ? result.field : null;
        showError(result.message ?? "Something went wrong.", field);
        return;
      }

      setStatus("success");
      setMessage("You're on the list. Thanks for helping shape Paper.");
      setInvalidField(null);
      form.reset();
    } catch {
      showError("Could not submit the form. Please try again.");
    }
  }

  const messageId = "waitlist-message";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="min-w-0 rounded-4xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
    >
      <div
        aria-hidden="true"
        hidden
      >
        <label htmlFor="waitlist-website">Leave this field blank</label>
        <input
          id="waitlist-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          maxLength={WAITLIST_FIELD_LIMITS.website}
        />
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2" htmlFor="waitlist-email">
          <span className="text-sm font-medium text-neutral-200">
            Email address
            <RequiredMark />
          </span>
          <input
            ref={emailRef}
            id="waitlist-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            maxLength={WAITLIST_FIELD_LIMITS.email}
            aria-invalid={invalidField === "email"}
            aria-describedby={invalidField === "email" ? messageId : undefined}
            className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-neutral-400 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <label className="grid gap-2" htmlFor="waitlist-current-tool">
          <span className="text-sm font-medium text-neutral-200">
            What do you use now?
          </span>
          <input
            ref={currentToolRef}
            id="waitlist-current-tool"
            name="currentTool"
            type="text"
            placeholder="Apple Notes, Notion, Obsidian..."
            maxLength={WAITLIST_FIELD_LIMITS.currentTool}
            aria-invalid={invalidField === "currentTool"}
            aria-describedby={
              invalidField === "currentTool" ? messageId : undefined
            }
            className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-neutral-400 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <label className="grid gap-2" htmlFor="waitlist-pain">
          <span className="text-sm font-medium text-neutral-200">
            What feels annoying or slow about your current setup?
          </span>
          <textarea
            ref={painRef}
            id="waitlist-pain"
            name="pain"
            rows={4}
            placeholder="Optional, but this is the most useful feedback."
            maxLength={WAITLIST_FIELD_LIMITS.pain}
            aria-invalid={invalidField === "pain"}
            aria-describedby={invalidField === "pain" ? messageId : undefined}
            className="resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-400 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <fieldset
          className="grid gap-3"
          aria-invalid={invalidField === "testerIntent"}
          aria-describedby={
            invalidField === "testerIntent" ? messageId : undefined
          }
        >
          <legend className="text-sm font-medium text-neutral-200">
            Would you be open to testing an early version?
            <RequiredMark />
          </legend>

          {TESTER_INTENTS.map((option, index) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/5"
            >
              <input
                ref={index === 0 ? testerIntentRef : undefined}
                type="radio"
                name="testerIntent"
                value={option}
                required
                aria-describedby={
                  invalidField === "testerIntent" ? messageId : undefined
                }
                className="size-4 accent-white"
              />
              {option}
            </label>
          ))}
        </fieldset>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 h-12 rounded-2xl bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Join the Paper waitlist"}
        </button>

        {message ? (
          <p
            id={messageId}
            role={status === "error" ? "alert" : "status"}
            aria-live={status === "error" ? "assertive" : "polite"}
            className={
              status === "success"
                ? "text-sm leading-6 text-emerald-300"
                : "text-sm leading-6 text-red-300"
            }
          >
            {message}
          </p>
        ) : null}

        <p className="text-sm leading-6 text-neutral-300">
          <span className="text-emerald-300">*</span> Required. No account. No
          workspace. Just early access and useful feedback.
        </p>

        <p className="text-sm leading-6 text-neutral-400">
          See how Kumina Labs handles your waitlist information in the{" "}
          <Link
            href="/privacy"
            className="font-medium text-neutral-200 underline decoration-neutral-500 underline-offset-4 transition hover:text-white"
          >
            privacy notice
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
