import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: `${SITE.teamName} Basketball`,
  description: "Official site for Team Impact: schedule, roster, photos, and contact.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: `${SITE.teamName} Basketball`,
    description: "Schedule, roster, photos, and contact.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
