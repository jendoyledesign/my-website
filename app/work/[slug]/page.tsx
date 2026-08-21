import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProject, getNextProject, projects } from "@/app/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.client} — ${project.services.join(", ")}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-screen"
        style={{ backgroundColor: project.color }}
      >
        {project.heroImage && (
          <Image
            src={project.heroImage}
            alt={project.client}
            fill
            className="object-cover"
            priority
          />
        )}
      </section>

      {/* ── Metadata strip ───────────────────────────────────── */}
      <div className="border-y border-[var(--border)]">
        <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-5 flex flex-wrap items-center gap-8 md:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1">Client</p>
            <p className="text-sm font-medium">{project.client}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1">Year</p>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1">Industry</p>
            <p className="text-sm font-medium">{project.industry}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-1">Services</p>
            <p className="text-sm font-medium">{project.services.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* ── Client name + tagline ─────────────────────────────── */}
      <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pt-20 md:pt-28 pb-10 md:pb-14">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] max-w-5xl">
          {project.client}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-xl leading-relaxed">
          {project.heroTagline}
        </p>
      </div>

      {/* ── Key outcomes ─────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28 border-b border-[var(--border)]">
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-10">
          Key Outcomes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {project.outcomes.map((outcome, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-4xl md:text-5xl font-medium text-[var(--border)] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg md:text-xl font-medium leading-snug">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] sticky top-20">
              Challenge
            </p>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* ── Image block 1 — single 16:9 ──────────────────────── */}
      {project.images ? (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="relative w-full aspect-[16/9]">
            <Image src={project.images[0]} alt="" fill className="object-cover"
              unoptimized={project.images[0].endsWith(".gif")} />
          </div>
        </div>
      ) : (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="w-full aspect-[16/9]"
            style={{ backgroundColor: project.blocks[0].color }} />
        </div>
      )}

      {/* ── Solution ─────────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] sticky top-20">
              Solution
            </p>
          </div>
          <div className="space-y-6 max-w-3xl">
            {project.solution.split("\n\n").map((para, i) => (
              <p key={i} className="text-xl md:text-2xl leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image block 2 — two-up 1:1 ───────────────────────── */}
      {project.images ? (
        <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20">
          {[project.images[1], project.images[2]].map((src, i) => (
            <div key={i} className="relative w-full aspect-square">
              <Image src={src} alt="" fill className="object-cover"
                unoptimized={src.endsWith(".gif")} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20">
          <div className="w-full aspect-square"
            style={{ backgroundColor: project.blocks[1].color }} />
          <div className="w-full aspect-square"
            style={{ backgroundColor: project.blocks[2].color }} />
        </div>
      )}

      {/* ── Extra image rows (for projects with gallery) ──────── */}
      {project.images && project.images.length > 3 && (
        <>
          {/* Single 16:9 */}
          <div className="px-8 md:px-12 xl:px-20 mt-4">
            <div className="relative w-full aspect-[16/9]">
              <Image src={project.images[3]} alt="" fill className="object-cover"
                unoptimized={project.images[3].endsWith(".gif")} />
            </div>
          </div>
          {/* Two-up 1:1 */}
          {project.images.length > 5 && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              {[project.images[4], project.images[5]].map((src, i) => (
                <div key={i} className="relative w-full aspect-square">
                  <Image src={src} alt="" fill className="object-cover"
                    unoptimized={src.endsWith(".gif")} />
                </div>
              ))}
            </div>
          )}
          {/* Single 16:9 */}
          {project.images.length > 6 && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <Image src={project.images[6]} alt="" fill className="object-cover"
                  unoptimized={project.images[6].endsWith(".gif")} />
              </div>
            </div>
          )}
          {/* Single 16:9 */}
          {project.images.length > 7 && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <Image src={project.images[7]} alt="" fill className="object-cover"
                  unoptimized={project.images[7].endsWith(".gif")} />
              </div>
            </div>
          )}
          {/* Two-up 1:1 */}
          {project.images.length > 9 && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              {project.images.slice(8, 10).map((src, i) => (
                <div key={i} className="relative w-full aspect-square">
                  <Image src={src} alt="" fill className="object-cover"
                    unoptimized={src.endsWith(".gif")} />
                </div>
              ))}
            </div>
          )}
          {/* Single 16:9 */}
          {project.images.length > 10 && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <Image src={project.images[10]} alt="" fill className="object-cover"
                  unoptimized={project.images[10].endsWith(".gif")} />
              </div>
            </div>
          )}
          {/* Two-up 1:1 */}
          {project.images.length > 12 && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              {project.images.slice(11, 13).map((src, i) => (
                <div key={i} className="relative w-full aspect-square">
                  <Image src={src} alt="" fill className="object-cover"
                    unoptimized={src.endsWith(".gif")} />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── Collaborators ────────────────────────────────────── */}
      {project.collaborators && project.collaborators.length > 0 && (
        <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
          <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] sticky top-20">
                Collaborators
              </p>
            </div>
            <div className="space-y-3">
              {project.collaborators.map(({ role, name }) => (
                <p key={name} className="text-xl md:text-2xl leading-snug">
                  <span className="text-[var(--muted)]">{role}:</span> {name}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Next project ─────────────────────────────────────── */}
      {next && (
        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-[var(--border)]"
        >
          <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-16 md:py-20 flex items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">
                Next Project
              </p>
              <p className="text-2xl md:text-4xl font-medium tracking-tight group-hover:underline underline-offset-4 max-w-2xl">
                {next.client}
              </p>
            </div>
            <span className="text-3xl text-[var(--muted)] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform flex-shrink-0">
              ↗
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
