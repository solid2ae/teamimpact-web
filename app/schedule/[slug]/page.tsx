import { notFound } from "next/navigation";
import Link from "next/link";
import games from "@/data/games.json";
import { SectionTitle } from "@/components/SectionTitle";

export default function GameDetailsPage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  if (!game) return notFound();

  return (
    <>
      <div className="container-pad pt-10">
        <SectionTitle
          eyebrow="Game"
          title={`Team Impact vs ${game.opponent}`}
          subtitle={`${game.date} • ${game.time} • ${game.location}`}
        />
      </div>

      <section className="container-pad mt-6 pb-12 space-y-6">
        <div className="card p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-white/60">Result</div>
              <div className="text-2xl font-extrabold tracking-tight">{game.result || "TBD"}</div>
              {game.notes ? <div className="muted mt-2">{game.notes}</div> : null}
            </div>
            <div className="flex gap-3">
              <Link className="btn" href="/schedule">← Back to schedule</Link>
              <Link className="btn-solid" href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-sm font-semibold text-white/70">Box stats</div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-white/60">
                  <tr>
                    <th className="py-2 pr-4">Player</th>
                    <th className="py-2 pr-4">PTS</th>
                    <th className="py-2 pr-4">REB</th>
                    <th className="py-2">AST</th>
                  </tr>
                </thead>
                <tbody>
                  {game.boxScore?.map((r) => (
                    <tr key={r.player} className="border-t border-white/10">
                      <td className="py-2 pr-4 font-semibold">{r.player}</td>
                      <td className="py-2 pr-4">{r.pts}</td>
                      <td className="py-2 pr-4">{r.reb}</td>
                      <td className="py-2">{r.ast}</td>
                    </tr>
                  )) ?? (
                    <tr><td className="py-2 text-white/60" colSpan={4}>No stats yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="muted mt-3 text-xs">
              Tip: later you can auto-pull stats from a Google Sheet or a free CMS.
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold text-white/70">Highlights</div>
            <div className="muted mt-2 text-sm">
              Paste a YouTube link into <code className="text-gold-200">videoUrl</code> for this game.
            </div>
            {game.videoUrl ? (
              <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-white/10">
                {/* Simple embed for YouTube links */}
                <iframe
                  className="h-full w-full"
                  src={toEmbedUrl(game.videoUrl)}
                  title="Game highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
                No video yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function toEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {}
  return url;
}
