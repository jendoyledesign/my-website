import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J. Doyle — UX Designer",
};

const featuredWork = [
  {
    slug: "compass-pathways",
    title: "Redesigning the onboarding experience",
    client: "Compass Pathways",
    year: "2026",
    tags: ["UX Research", "Product Design"],
    color: "#e8e4de",
  },
  {
    slug: "nespresso",
    title: "A new design system for a global brand",
    client: "Nespresso",
    year: "2026",
    tags: ["Design Systems", "Component Library"],
    color: "#dde4e0",
  },
  {
    slug: "outfront",
    title: "Mobile app for climate-conscious consumers",
    client: "Outfront",
    year: "2026",
    tags: ["Mobile", "UX Strategy"],
    color: "#e4dde8",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="text-sm text-[var(--muted)] mb-4 tracking-wide uppercase">
          Product Designer
        </p>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl">
          Crafting beautiful interfaces and brand identities.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] max-w-xl leading-relaxed">
          Jen Doyle is product designer based in Brooklyn, NY with over ten
          years of experience crafting digital products.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm font-medium px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full hover:opacity-80 transition-opacity"
          >
            View my work
          </Link>
          <Link
            href="/about"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover-underline transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[var(--border)] max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20" />

      {/* Selected Work */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm font-medium tracking-wide uppercase text-[var(--muted)]">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover-underline transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-4">
          {featuredWork.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex flex-col md:flex-row md:items-center gap-6 rounded-2xl p-6 md:p-8 transition-colors hover:bg-[var(--subtle)]"
              style={{ backgroundColor: i === 0 ? project.color + "33" : undefined }}
            >
              {/* Color swatch / thumbnail placeholder */}
              <div
                className="w-full md:w-48 h-32 md:h-28 rounded-xl flex-shrink-0"
                style={{ backgroundColor: project.color }}
              />

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-[var(--muted)] mb-1">
                      {project.client} · {project.year}
                    </p>
                    <h3 className="text-xl font-medium leading-snug group-hover:underline underline-offset-2">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[var(--muted)] text-xl mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--muted)] border border-[var(--border)] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
