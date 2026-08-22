import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProject, getNextProject, getPreviousProject, projects } from "@/app/data/projects";

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
  const prev = getPreviousProject(slug);

  return (
    <div>
      {/* ── Client name ───────────────────────────────────────── */}
      <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pt-[300px] pb-10 md:pb-14">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] max-w-5xl">
          {project.client}
        </h1>
      </div>

      {/* ── Three-column description ──────────────────────────── */}
      <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pb-20 md:pb-28 border-b border-[var(--border)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500 mb-4">Year</p>
            <p className="text-[18px]">{project.year}</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500 mb-4">Role</p>
            <p className="text-[18px]">{project.services.join(", ")}</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500 mb-4">Overview</p>
            <p className="text-[18px] leading-relaxed">{project.challenge}</p>
          </div>
        </div>
      </div>

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

      {/* ── Challenge ────────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500 sticky top-20">
              Challenge
            </p>
          </div>
          <p className="text-[20px] leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
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

      {/* ── Solution ─────────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500 sticky top-20">
              Solution
            </p>
          </div>
          <div className="space-y-6 max-w-3xl">
            {project.solution.split("\n\n").map((para, i) => (
              <p key={i} className="text-[20px] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image block 3 — single 16:9 (above collaborators) ── */}
      {project.images && project.images.length > 3 ? (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="relative w-full aspect-[16/9]">
            <Image src={project.images[3]} alt="" fill className="object-cover"
              unoptimized={project.images[3].endsWith(".gif")} />
          </div>
        </div>
      ) : (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="w-full aspect-[16/9]"
            style={{ backgroundColor: project.blocks[0].color }} />
        </div>
      )}

      {/* ── Extra image rows (for projects with extended gallery) */}
      {project.images && project.images.length > 4 && (
        <>
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
              <p className="text-[14px] uppercase tracking-widest text-gray-500 sticky top-20">
                Collaborators
              </p>
            </div>
            <div className="space-y-3">
              {project.collaborators.map(({ role, name }) => (
                <p key={name} className="text-[16px] leading-snug">
                  <span className="text-[var(--muted)]">{role}:</span> {name}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Project navigation ───────────────────────────────── */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-16 md:py-20 flex items-center justify-between gap-8">
          {/* Previous */}
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group">
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">
                Previous Project
              </p>
              <p className="text-2xl md:text-4xl font-medium tracking-tight group-hover:underline underline-offset-4">
                {prev.client}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group text-right">
              <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">
                Next Project
              </p>
              <p className="text-2xl md:text-4xl font-medium tracking-tight group-hover:underline underline-offset-4">
                {next.client}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
