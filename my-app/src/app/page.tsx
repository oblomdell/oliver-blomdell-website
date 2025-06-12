import type { Metadata } from "next";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import ThemeToggle from "@/components/ThemeToggle";

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
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
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
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Oliver Blomdell</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Junior developer.</h3>
          <p className="text-base py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi pariatur vitae cum laboriosam illum atque rem numquam.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillMail />
        </div>
        <div>
          {/* Lägg in en profilbild */}
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Titel</h3>
          <p className="text-base py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestias voluptatem perspiciatis iste quod tenetur incidunt?<span className="text-teal-500"> Lorem. </span>Lorem, ipsum.<span className="text-teal-500"> Lorem. </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic eveniet perspiciatis repudiandae dolor, dignissimos accusamus!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus tempora accusamus amet qui facilis fuga.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Tech Stack</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita sit ullam.</p>
            <h4 className="py-4 text-teal-600">Tools i use</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Adobe XD</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Tech Stack</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita sit ullam.</p>
            <h4 className="py-4 text-teal-600">Tools i use</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Adobe XD</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-lg font-medium pt-8 pb-2">Tech Stack</h3>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita sit ullam.</p>
            <h4 className="py-4 text-teal-600">Tools i use</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Adobe XD</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-base py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestias voluptatem perspiciatis iste quod tenetur incidunt?<span className="text-teal-500"> Lorem. </span>Lorem, ipsum.<span className="text-teal-500"> Lorem. </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic eveniet perspiciatis repudiandae dolor, dignissimos accusamus!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800">
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
