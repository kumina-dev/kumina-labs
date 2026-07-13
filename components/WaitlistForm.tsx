"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      currentTool: String(formData.get("currentTool") ?? "").trim(),
      pain: String(formData.get("pain") ?? "").trim(),
      testerIntent: String(formData.get("testerIntent") ?? "").trim(),
      source: "landing-page",
      product: "paper",
      page: "home",
    };

    if (!payload.email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(payload.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!payload.testerIntent) {
      setStatus("error");
      setMessage("Please choose whether you're open to testing Paper.");
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("You're on the list. Thanks for helping shape Paper.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not submit the form. Please try again."
      );
    }
  }
  
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="min-w-0 rounded-4xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
    >
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-neutral-200">
            Email address
            <RequiredMark />
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-neutral-200">
            What do you use now?
          </span>
          <input
            name="currentTool"
            type="text"
            placeholder="Apple Notes, Notion, Obsidian..."
            className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-neutral-200">
            What feels annoying or slow about your current setup?
          </span>
          <textarea
            name="pain"
            rows={4}
            placeholder="Optional, but this is the most useful feedback."
            className="resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white/30 focus:ring-4 focus:ring-white/10"
          />
        </label>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-neutral-200">
            Would you be open to testing an early version?
            <RequiredMark />
          </legend>

          {[
            "Yes, I'd like to test it",
            "Maybe, send me updates first",
            "Not right now",
          ].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/5"
            >
              <input
                type="radio"
                name="testerIntent"
                value={option}
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
            className={
              status === "success"
                ? "text-sm leading-6 text-emerald-300"
                : "text-sm leading-6 text-red-300"
            }
          >
            {message}
          </p>
        ) : null}

        <p className="text-sm leading-6 text-neutral-500">
          <span className="text-emerald-300">*</span> Required. No account. No workspace. Just early access and useful feedback.
        </p>
      </div>
    </form>
  );
}
