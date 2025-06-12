import type { Metadata } from "next";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

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
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-main">oliver blomdell</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Oliver Blomdell</h2>
          <h3 className="text-2xl py-2">Junior developer.</h3>
          <p className="text-base py-5 leading-8 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi pariatur vitae cum laboriosam illum atque rem numquam.</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, molestias voluptatem perspiciatis iste quod tenetur incidunt?
            <span className="text-teal-500"> Lorem. </span>
            Lorem, ipsum.
            <span className="text-teal-500"> Lorem. </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic eveniet perspiciatis repudiandae dolor, dignissimos accusamus!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus tempora accusamus amet qui facilis fuga.</p>
        </div>
      </section>
    </main>
  );
}
