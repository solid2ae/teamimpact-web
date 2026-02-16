import Link from "next/link";
import { SITE } from "./site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-pad py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-white/70">
          <span className="font-semibold text-white">{SITE.teamName}</span> • {SITE.location}
          <div className="text-xs text-white/50 mt-1">Built with Next.js • Hosted on Vercel</div>
        </div>

        <div className="flex items-center gap-3">
          <Link className="btn" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            Instagram @{SITE.handle}
          </Link>
          <Link className="btn-solid" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
