"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("Join the list for launch updates and wholesale info.");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Submitting...");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit form.");
      }

      setStatus("success");
      setMessage(data.message ?? "You are on the list.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Church email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-14 flex-1 rounded-full border border-white/12 bg-white/6 px-6 text-white outline-none transition placeholder:text-white/35 focus:border-[color:var(--accent)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-14 rounded-full bg-[color:var(--accent)] px-6 font-medium text-black transition hover:bg-[color:var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "Get launch updates"}
        </button>
      </div>
      <p className={`text-sm ${status === "error" ? "text-red-300" : "text-white/60"}`}>{message}</p>
    </form>
  );
}
