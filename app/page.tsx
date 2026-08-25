import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J. Doyle — UX Designer",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-56px)] flex items-center max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20">
        <div className="flex flex-col gap-16 max-w-[1000px]">
          <p className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.15]">
            Hello! I&apos;m Jen — a product designer based in Brooklyn, NY with
            over ten years of experience.
          </p>
          <p className="text-4xl md:text-6xl font-normal tracking-tight leading-[1.15]">
            Currently designing stuff at{" "}
            <a
              href="https://hugeinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[3px]"
            >
              Huge
            </a>
            .
          </p>
          <div>
            <Link
              href="/work"
              className="inline-flex items-center px-8 h-[60px] bg-[var(--foreground)] text-[var(--background)] text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
