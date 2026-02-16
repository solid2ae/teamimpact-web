"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "./site";

const links = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/roster", label: "Roster" },
  { href: "/photos", label: "Photos" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070a]/70 backdrop-blur">
      <div className="container-pad flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-gold-400/25 bg-gold-400/10 grid place-items-center">
            <span className="text-gold-200 font-black">TI</span>
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight">{SITE.teamName}</div>
            <div className="text-xs text-white/60">@{SITE.handle}</div>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active ? "bg-gold-400/15 text-gold-100 border border-gold-400/25" : "text-white/80 hover:bg-white/5",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link className="btn hidden md:inline-flex" href="/contact">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
