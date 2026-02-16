import Image from "next/image";
import Link from "next/link";
import { SITE } from "./site";

export function Hero() {
  return (
    <section className="container-pad pt-10 pb-8">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 text-xs font-semibold text-gold-100">
            Black & Gold • Youth Basketball • @{SITE.handle}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {SITE.teamName} Basketball
            <span className="block text-gold-200">Play fast. Play together.</span>
          </h1>

          <p className="muted max-w-prose">
            Official team site for schedules, rosters, photos, and game details. This site is designed to grow with the team—add players,
            upload highlights, and attach box stats for every game.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link className="btn-solid" href="/schedule">View schedule</Link>
            <Link className="btn" href="/roster">Meet the roster</Link>
            <Link className="btn" href={SITE.instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram</Link>
          </div>
        </div>

        <div className="card p-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
            <Image
              src="/logo/team-impact.png"
              alt={`${SITE.teamName} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Team color</div>
              <div className="font-bold text-gold-200">Gold</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Team color</div>
              <div className="font-bold">Black</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Social</div>
              <div className="font-bold">@{SITE.handle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
