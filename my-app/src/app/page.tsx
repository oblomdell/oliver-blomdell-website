import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

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
    <main className="dark:bg-neutral-800 transition-all duration-300">
        <Hero />
{/* 
        <About />

        <Portfolio /> */}
    </main>
  );
}
