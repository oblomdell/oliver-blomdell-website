import type { Metadata } from "next";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image"

export const metadata: Metadata = {
  title: "Oliver Blomdell - Information Architect",
  description: "Portfolio and website for Oliver Blomdell, an information architect focused on digital structure and usability.",
  openGraph: {
    title: "Oliver Blomdell - Information Architect",
    description: "Explore projects, methods and solutions by Oliver Blomdell within digital structure and usability.",
    url: "https://oliverblomdell.se",
    //images: ["/namn.jpg"],
  }
};

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-all duration-300">
      <section className="mb-10">
        <nav className="py-10 mb-12 space-x-2 flex justify-between dark:text-white">
          <h1 className="text-xl font-main">oliver blomdell</h1>
          <ul className="flex items-center">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Oliver Blomdell</h2>
          <h3 className="text-2xl font-medium py-2 md:text-3xl">Information Architect.</h3>
          <p className="text-base py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi pariatur vitae cum laboriosam illum atque rem numquam.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/oliverblomdell/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/oblomdell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
          >
            <AiFillGithub /></a>
          <a
            href="mailto:oblomdell@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-Mail"
            className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
          >
            <AiFillMail /></a>
        </div>
        <div className="relative mx-auto w-80 h-80 mt-20">
          <Image src="/images/profilepic.png" layout="fill" objectFit="cover" alt="Profile picture" />
        </div>
      </section>

      <section>
        {/* <div>
          <h3 className="text-3xl py-1">Titel</h3>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestias voluptatem perspiciatis iste quod tenetur incidunt?<span className="text-teal-500"> Lorem. </span>Lorem, ipsum.<span className="text-teal-500"> Lorem. </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic eveniet perspiciatis repudiandae dolor, dignissimos accusamus!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus tempora accusamus amet qui facilis fuga.
          </p>
        </div> */}
        <div className="lg:flex gap-10">
          <div className="shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-zinc-800 dark:text-gray-100 flex-1">
            <h3 className="text-lg font-medium pb-2">Tools & Technologies</h3>
            <p className="py-2">I use modern web technologies and tools to design and build efficient, sclable and, user-friendly digital solutions.</p>

            <h4 className="pt-6 pb-2 text-teal-600 dark:text-teal-400 font-medium">Languages</h4>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">JavaScript & TypeScript</p>

            <h4 className="pt-6 pb-2 text-teal-600 dark:text-teal-400 font-medium">Frontend</h4>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">React & Next.js</p>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">React Native & Expo Go</p>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">Svelte</p>

            <h4 className="pt-4 pb-2 text-teal-600 dark:text-teal-400 font-medium">Backend & Dev</h4>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">Node.js & Express</p>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">REST APIs, JSON</p>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">Git & GitHub</p>

            <h4 className="pt-4 pb-2 text-teal-600 dark:text-teal-400 font-medium">Design</h4>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">Figma</p>
            <p className="text-gray-800 dark:text-gray-200 text-sm py-0.5">Adobe XD</p>
          </div>
          <div className="shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-zinc-800 dark:text-gray-100 flex-1">
            <h3 className="text-lg font-medium pb-2">Tech Stack</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita sit ullam.</p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">Tools I use</h4>
            <p className="text-gray-800 dark:text-gray-200 py-1">React</p>
            <p className="text-gray-800 dark:text-gray-200 py-1">Figma</p>
            <p className="text-gray-800 dark:text-gray-200 py-1">Adobe XD</p>
          </div>
          <div className="shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-zinc-800 dark:text-gray-100 flex-1">
            <h3 className="text-lg font-medium pb-2">Education & Experience</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita sit ullam.</p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">Tools I use</h4>
            <p className="text-gray-800 dark:text-gray-200 py-1">Bachelor of Science in Computer and Information Science - Malmö University</p>
            <p className="text-gray-800 dark:text-gray-200 py-1">IT-support, Helpdesk - Malmö University</p>
            <p className="text-gray-800 dark:text-gray-200 py-1">Substitute teacher - Kullagymnasiet</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestias voluptatem perspiciatis iste quod tenetur incidunt?<span className="text-teal-500"> Lorem. </span>Lorem, ipsum.<span className="text-teal-500"> Lorem. </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic eveniet perspiciatis repudiandae dolor, dignissimos accusamus!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus tempora accusamus amet qui facilis fuga.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            {/* Bild eller video på projekt */}
          </div>
          <div className="basis-1/3 flex-1">
            {/* Bild eller video på projekt */}
          </div>
          <div className="basis-1/3 flex-1">
            {/* Bild eller video på projekt */}
          </div>
          <div className="basis-1/3 flex-1">
            {/* Bild eller video på projekt */}
          </div>
        </div>
      </section>
    </main>
  );
}
