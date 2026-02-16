import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { SITE } from "@/components/site";

export default function ContactPage() {
  return (
    <>
      <div className="container-pad pt-10">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          subtitle="For now this is info-only. When you're ready, we can add a contact form (free) or tryouts registration."
        />
      </div>

      <section className="container-pad mt-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <div className="text-sm font-semibold text-white/70">Instagram</div>
            <div className="mt-2 text-lg font-bold">@{SITE.handle}</div>
            <div className="muted mt-2 text-sm">Fastest way to reach the team right now.</div>
            <div className="mt-4">
              <Link className="btn-solid" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                Message on Instagram
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold text-white/70">Email (optional)</div>
            <div className="muted mt-2 text-sm">
              Add a team email address here when you have one. If you want, I can wire up a free contact form using Formspree or Netlify Forms.
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
              Example: coach@teamimpactva.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
