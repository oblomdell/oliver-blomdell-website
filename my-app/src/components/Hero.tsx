import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Image from "next/image"
import { BiBuilding, BiChevronDown } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="h-dvh flex flex-col md:flex-row-reverse justify-center md:justify-evenly md:items-center gap-[20px] mb-[60px] md:mb-[100px] xl:mb-[200px]">

            {/* <nav className="py-10 sm:mb-12 space-x-2 flex justify-between dark:text-white items-center">
                <h1 className="text-xl font-rubik uppercase font-extrabold">Oliver Blomdell</h1>
                <ul className="flex items-center">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 md:ml-8" href="#">Resume</a>
                    </li>
                </ul>
            </nav> */}

            <div className="relative mx-auto md:mx-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
                <Image
                    src="/images/profilepic.png"
                    alt="Picture of Oliver Blomdell"
                    fill
                    sizes="(min-width: 768px) 350px, 200px"
                    priority
                />

                <div className="absolute top-0 right-0 translate-x-[100%] md:translate-x-[20%] -translate-y-[20%]">
                    <ThemeToggle />
                </div>
            </div>

            <div className="text-center flex flex-col gap-[20px] items-center">
                <h1 className="font-rubik font-extrabold uppercase text-[32px]/9 md:text-[40px]/12 xl:text-5xl">Oliver<br />Blomdell</h1>
                <h2 className="font-roboto-mono font-bold uppercase text-xl md:text-2xl">Information Architect</h2>
                <div className="text-4xl flex justify-center gap-[25px]">
                    <a
                        href="https://www.linkedin.com/in/oliverblomdell/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-transform duration-200 hover:scale-110"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://github.com/oblomdell"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-transform duration-200 hover:scale-110"
                    >
                        <AiFillGithub /></a>
                    <a
                        href="mailto:oblomdell@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-Mail"
                        className="transition-transform duration-200 hover:scale-110"
                    >
                        <AiFillMail /></a>
                </div>
                {/* <p className="font-roboto-mono max-w-[24ch]">With a passion for developing modern React web apps for commercial businesses.</p> */}
                <div className="flex sm:flex-row sm:items-center flex-col-reverse items-start gap-3">
                    <div className="flex items-center gap-2 pl-2">
                        <BiBuilding className="w-5 h-5" />
                        <h3 className="text-gray-600 dark:text-gray-400">Malmö, Sweden</h3>
                    </div>

                    <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
                        <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                            <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <p>Available for work</p>
                    </Button>
                </div>
                <a className="bg-sky-600 dark:bg-white  text-white dark:text-black font-[Arial] font-bold text-xl px-6 py-3 rounded-[20px] shadow-md transition-transform duration-200 hover:scale-105" href="#">Resume</a>
            </div>

            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-300">
                <BiChevronDown size={32} />
            </div> */}

        </section>
    );
}