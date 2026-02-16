import { SectionTitle } from "@/components/SectionTitle";
import roster from "@/data/roster.json";

export default function RosterPage() {
  const sorted = [...roster].sort((a,b) => a.number - b.number);
  return (
    <>
      <div className="container-pad pt-10">
        <SectionTitle
          eyebrow="Players"
          title="Roster"
          subtitle="Update roster anytime in data/roster.json (or connect a CMS later)."
        />
      </div>

      <section className="container-pad mt-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sorted.map((p) => (
            <div key={p.name} className="card p-5">
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold">{p.name}</div>
                <div className="text-gold-200 font-extrabold">#{p.number}</div>
              </div>
              <div className="muted mt-2 text-sm">{p.position} • {p.height}{p.gradYear ? ` • ${p.gradYear}` : ""}</div>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/60">
                Player photo: {p.photo ? "linked" : "not set"} (optional)
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
