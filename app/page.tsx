import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import games from "@/data/games.json";
import roster from "@/data/roster.json";

function nextGame() {
  const today = new Date().toISOString().slice(0, 10);
  const future = [...games].filter((g) => g.date >= today).sort((a,b) => a.date.localeCompare(b.date));
  return future[0] ?? games.sort((a,b) => a.date.localeCompare(b.date))[0];
}

export default function HomePage() {
  const g = nextGame();
  return (
    <>
      <Hero />
      <div className="hr" />

      <SectionTitle
        eyebrow="Latest"
        title="Next game"
        subtitle="Add games and box stats in data/games.json (or switch to a CMS later)."
      />
      <section className="container-pad mt-6">
        <div className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-white/60">{g.date} • {g.time}</div>
              <div className="mt-1 text-2xl font-extrabold tracking-tight">
                Team Impact <span className="text-gold-200">vs</span> {g.opponent}
              </div>
              <div className="muted mt-1">{g.location}</div>
              {g.notes ? <div className="muted mt-3 text-sm">{g.notes}</div> : null}
            </div>
            <div className="flex gap-3">
              <Link className="btn-solid" href={`/schedule/${g.slug}`}>Game details</Link>
              <Link className="btn" href="/schedule">Full schedule</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="hr" />

      <SectionTitle
        eyebrow="Team"
        title="Roster snapshot"
        subtitle="Swap player names/numbers/photos anytime. Later, we can connect a free CMS for easy updates without touching code."
      />
      <section className="container-pad mt-6 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {roster.slice(0, 6).map((p) => (
            <div key={p.name} className="card p-5">
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold">{p.name}</div>
                <div className="text-gold-200 font-extrabold">#{p.number}</div>
              </div>
              <div className="muted mt-2 text-sm">{p.position} • {p.height}{p.gradYear ? ` • ${p.gradYear}` : ""}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link className="btn" href="/roster">View full roster →</Link>
        </div>
      </section>
    </>
  );
}
