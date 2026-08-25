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

function isGif(src: string | null | undefined): boolean {
  return src?.endsWith(".gif") ?? false;
}

function isVideo(src: string | null | undefined): boolean {
  return !!(src && (src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm")));
}

function MediaItem({ src, className }: { src: string | null; className?: string }) {
  if (!src) return null;
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={className ?? "absolute inset-0 w-full h-full object-cover"}
      />
    );
  }
  return (
    <Image src={src} alt="" fill className={className ?? "object-cover"}
      unoptimized={isGif(src)} />
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const prev = getPreviousProject(slug);

  const imgs: (string | null | undefined)[] = project.images ?? [];

  return (
    <div>
      {/* ── Client name ───────────────────────────────────────── */}
      <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pt-[100px] md:pt-[300px] pb-10 md:pb-14">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] max-w-5xl">
          {project.client}
        </h1>
      </div>

      {/* ── Three-column description ──────────────────────────── */}
      <div className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 pb-20 md:pb-28">
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
            <p className="text-[18px] leading-relaxed">{project.overview ?? project.challenge}</p>
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-[16px] underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Image block 1 — single 16:9 ──────────────────────── */}
      {imgs[0] ? (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="relative w-full aspect-[16/9]">
            <MediaItem src={imgs[0]} />
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
            <p className="text-[14px] uppercase tracking-widest text-gray-500">
              Challenge
            </p>
          </div>
          <p className="text-[20px] leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* ── Image block 2 — single 16:9 (null=color block, ""=skip, string=image) ── */}
      {imgs[1] !== "" && imgs[1] !== undefined && (
        <div className="px-8 md:px-12 xl:px-20">
          {imgs[1] ? (
            <div className="relative w-full aspect-[16/9]">
              <MediaItem src={imgs[1]} />
            </div>
          ) : (
            <div className="w-full aspect-[16/9]"
              style={{ backgroundColor: project.blocks[0].color }} />
          )}
        </div>
      )}

      {/* ── Image block 3 — two-up 1:1 (always renders, per-slot fallback) ── */}
      <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
        <div className="relative w-full aspect-square">
          {imgs[2]
            ? <MediaItem src={imgs[2]} />
            : <div className="absolute inset-0" style={{ backgroundColor: project.blocks[1].color }} />
          }
        </div>
        <div className="relative w-full aspect-square">
          {imgs[3]
            ? <MediaItem src={imgs[3]} />
            : <div className="absolute inset-0" style={{ backgroundColor: project.blocks[2].color }} />
          }
        </div>
      </div>

      {/* ── Solution ─────────────────────────────────────────── */}
      <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
          <div>
            <p className="text-[14px] uppercase tracking-widest text-gray-500">
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

      {/* ── Image block 4 — single (above collaborators) ── */}
      {imgs[4] ? (
        <div className="px-8 md:px-12 xl:px-20">
          {isVideo(imgs[4]) ? (
            <video
              src={imgs[4]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          ) : (
            <div className="relative w-full aspect-[16/9]">
              <MediaItem src={imgs[4]} />
            </div>
          )}
        </div>
      ) : (
        <div className="px-8 md:px-12 xl:px-20">
          <div className="w-full aspect-[16/9]"
            style={{ backgroundColor: project.blocks[0].color }} />
        </div>
      )}

      {/* ── Extra image rows (for projects with extended gallery) */}
      {imgs.length > 5 && (
        <>
          {/* Two-up 1:1 (per-slot fallback) */}
          {(imgs[5] || imgs[6]) && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-square">
                {imgs[5]
                  ? <MediaItem src={imgs[5]} />
                  : <div className="absolute inset-0" style={{ backgroundColor: project.blocks[1].color }} />
                }
              </div>
              <div className="relative w-full aspect-square">
                {imgs[6]
                  ? <MediaItem src={imgs[6]} />
                  : <div className="absolute inset-0" style={{ backgroundColor: project.blocks[2].color }} />
                }
              </div>
            </div>
          )}
          {/* Single 16:9 */}
          {imgs[7] && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <MediaItem src={imgs[7]} />
              </div>
            </div>
          )}
          {/* Single 16:9 */}
          {imgs[8] && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <MediaItem src={imgs[8]} />
              </div>
            </div>
          )}
          {/* Two-up 1:1 */}
          {imgs[9] && imgs[10] && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              {[imgs[9], imgs[10]].map((src, i) => (
                <div key={i} className="relative w-full aspect-square">
                  <MediaItem src={src} />
                </div>
              ))}
            </div>
          )}
          {/* Single 16:9 */}
          {imgs[11] && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <MediaItem src={imgs[11]} />
              </div>
            </div>
          )}
          {/* Two-up 1:1 */}
          {imgs[12] && imgs[13] && (
            <div className="grid grid-cols-2 gap-4 px-8 md:px-12 xl:px-20 mt-4">
              {[imgs[12], imgs[13]].map((src, i) => (
                <div key={i} className="relative w-full aspect-square">
                  <MediaItem src={src} />
                </div>
              ))}
            </div>
          )}
          {/* Single 16:9 */}
          {imgs[14] && (
            <div className="px-8 md:px-12 xl:px-20 mt-4">
              <div className="relative w-full aspect-[16/9]">
                <MediaItem src={imgs[14]} />
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Collaborators ────────────────────────────────────── */}
      {project.collaborators && project.collaborators.length > 0 && (
        <section className="max-w-[2100px] mx-auto px-8 md:px-12 xl:px-20 py-20 md:py-28">
          <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-24">
            <div>
              <p className="text-[14px] uppercase tracking-widest text-gray-500">
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
      <div>
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
