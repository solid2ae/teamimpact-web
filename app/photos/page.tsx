import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import photos from "@/data/photos.json";

export default function PhotosPage() {
  return (
    <>
      <div className="container-pad pt-10">
        <SectionTitle
          eyebrow="Gallery"
          title="Photos"
          subtitle="Drop images into public/photos and update data/photos.json, or use Instagram embeds later."
        />
      </div>

      <section className="container-pad mt-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-black">
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold">{p.alt}</div>
                {p.credit ? <div className="muted mt-1 text-xs">{p.credit}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
