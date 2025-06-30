import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oliver Blomdell - Information Architect",
  description: "Portfolio and website for Oliver Blomdell, an information architect focused on digital structure and usability.",
  openGraph: {
    title: "Oliver Blomdell - Information Architect",
    description: "Portfolio and website for Oliver Blomdell, an information architect focused on digital structure and usability.",
    url: "https://oliverblomdell.se",
    //images: ["/namn.jpg"],
  }
};

export default function Home() {
  return (
    <main className="flex justify-center dark:bg-neutral-800 transition-all duration-300">
      <div className="w-full max-w-screen-xl">
        <Hero />

        <Portfolio />

        <Skills />

        <Footer />
      </div>
    </main>
  );
}
