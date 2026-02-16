import Link from "next/link";
import games from "@/data/games.json";
import { SectionTitle } from "@/components/SectionTitle";

export default function SchedulePage() {
  const sorted = [...games].sort((a,b) => a.date.localeCompare(b.date));
  return (
    <>
      <div className="container-pad pt-10">
        <SectionTitle eyebrow="Games" title="Schedule" subtitle="Click a game for box stats and highlights." />
      </div>

      <section className="container-pad mt-6 pb-12">
        <div className="card overflow-hidden">
          <div className="grid grid-cols-12 gap-0 border-b border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white/70">
            <div className="col-span-3">Date</div>
            <div className="col-span-4">Opponent</div>
            <div className="col-span-3">Location</div>
            <div className="col-span-2 text-right">Result</div>
          </div>

          {sorted.map((g) => (
            <Link
              key={g.slug}
              href={`/schedule/${g.slug}`}
              className="grid grid-cols-12 items-center gap-0 px-4 py-4 hover:bg-white/5 transition border-b border-white/10 last:border-b-0"
            >
              <div className="col-span-3 text-sm">{g.date} <span className="text-white/60">• {g.time}</span></div>
              <div className="col-span-4 font-semibold">
                <span className="text-gold-200">vs</span> {g.opponent}
              </div>
              <div className="col-span-3 text-sm text-white/70">{g.location}</div>
              <div className="col-span-2 text-right text-sm">{g.result || <span className="text-white/50">TBD</span>}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
