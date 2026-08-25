"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const from = searchParams.get("from") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(from);
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-sm flex flex-col items-center gap-10">
        {/* Logo */}
        <Image
          src="/about/logo.png"
          alt="Jen Doyle"
          width={120}
          height={32}
          className="h-16 w-auto"
          priority
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            autoComplete="current-password"
            className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-[16px] text-[var(--foreground)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--foreground)] transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--foreground)] text-[var(--background)] px-4 py-3 text-[16px] hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {loading ? "Checking…" : "Enter"}
          </button>
          {error && (
            <p className="text-center text-[14px] text-[var(--muted)]">
              Incorrect password. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function PasswordPage() {
  return (
    <Suspense>
      <PasswordForm />
    </Suspense>
  );
}
