import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oliver Blomdell - Informationsarkitekt",
  description: "Portfölj för Oliver Blomdell - informationsarkitekt.",
  openGraph: {
    title: "Oliver Blomdell - Informationsarkitekt",
    description: "Utforska projekt, metoder och lösningar av Oliver Blomdell inom digital struktur och användbarhet.",
    url: "https://oliverblomdell.se",
    siteName: "Oliver Blomdell",
    type: "website",
    //images: ["/namn.jpg"],
  },
  metadataBase: new URL("https://oliverblomdell.se"),
};

export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
        <h1>Hello</h1>
      </section>
    </main>
  );
}
