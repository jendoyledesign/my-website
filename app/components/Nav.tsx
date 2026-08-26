"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-transparent">
      <nav className="max-w-[2100px] mx-auto px-4 md:px-12 xl:px-20 pt-4 pb-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/about/logo.png"
            alt="Jen Doyle"
            width={120}
            height={32}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <ul className="flex items-center gap-7">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[18px] hover-underline transition-colors ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
