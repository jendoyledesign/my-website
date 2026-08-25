import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by Jen Doyle.",
};

export default function WorkPage() {
  return (
    <div className="max-w-[2100px] mx-auto px-4 md:px-12 xl:px-20 pb-12 md:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  unoptimized={project.image.endsWith(".gif")}
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundColor: project.color }}
                />
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-[16px] font-medium leading-snug group-hover:underline underline-offset-2">
                {project.client}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
