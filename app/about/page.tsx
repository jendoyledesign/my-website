import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Brooklyn based product designer with over ten years of experience.",
};

const recognitions = [
  "DC FemTech Award — Design // 2019",
  "MICA Dean's List // 2011–2015",
  "MICA Competitive Scholarship // 2011–2015",
];

const speaking = [
  "MICA — Flex Design Class // 2019",
  "ISL Skillshare — Web Design Class // 2018",
  "TechGirls x ISL — Web Design Workshop // 2017",
  "General Assembly — Web Design Portfolio Panel // 2016",
];


export default function AboutPage() {
  return (
    <div className="max-w-[2100px] mx-auto">
      <div className="flex flex-col md:flex-row min-h-[85vh]">
        {/* Left column — text */}
        <div className="flex-1 px-8 md:px-12 xl:px-20 py-16 flex flex-col justify-center">
          <div className="space-y-5 max-w-[650px]">
            <p className="text-lg leading-relaxed">
              Jen Doyle is a Brooklyn-based product designer with over ten
              years of experience. She earned a BFA in Graphic Design from MICA
              and is currently at{" "}
              <a
                href="https://hugeinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Huge
              </a>
              , designing for a variety of clients. She blends her passion for
              beautiful interfaces with design systems thinking and new
              technologies to develop thoughtful, human centered digital
              experiences. Previously, she worked at{" "}
              <a
                href="https://www.instagram.com/istrategylabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                ISL
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/illustria.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Illustria
              </a>{" "}
              and{" "}
              <a
                href="https://exit10.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Exit10
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Let&apos;s work together:{" "}
              <a
                href="mailto:hello@jendoyle.com"
                className="text-[var(--foreground)] hover-underline"
              >
                hello@jendoyle.com
              </a>
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[var(--border)] space-y-10">
            {/* Recognitions */}
            <div>
              <h2 className="text-sm font-medium tracking-wide uppercase text-[var(--muted)] mb-6">
                Recognitions
              </h2>
              <ul className="space-y-3">
                {recognitions.map((item) => (
                  <li key={item} className="text-[16px] text-[var(--foreground)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Speaking */}
            <div>
              <h2 className="text-sm font-medium tracking-wide uppercase text-[var(--muted)] mb-6">
                Speaking / Workshops
              </h2>
              <ul className="space-y-3">
                {speaking.map((item) => (
                  <li key={item} className="text-[16px] text-[var(--foreground)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right column — photo */}
        <div className="md:w-[55%] lg:w-[60%] flex-shrink-0 flex items-start justify-end p-8 md:pt-0 md:pr-12 md:pb-0 md:pl-0 xl:pr-20">
          <div className="relative w-full max-w-[700px] aspect-[3/4] md:aspect-auto md:h-[840px]">
            <Image
              src="/about/jen-doyle-profile.jpg"
              alt="Jen Doyle"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
