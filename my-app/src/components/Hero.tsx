import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Image from "next/image"
import { BiBuilding, BiChevronDown } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-dvh flex flex-col justify-center gap-[20px]">
            <div className="relative mx-auto w-50 h-50">
                <Image
                    src="/images/profilepic.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Picture of Oliver Blomdell"
                    className="rounded-full"
                />
                <div className="absolute -right-8">
                    <ThemeToggle />
                </div>
            </div>


            <div className="text-center flex flex-col gap-[20px] items-center">
                <h2 className="font-rubik font-extrabold uppercase text-4xl">Oliver<br />Blomdell</h2>
                <h3 className="font-roboto-mono font-bold uppercase text-xl">Information Architect</h3>
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
                     <div className="flex sm:flex-row sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
                         <div className="flex items-center gap-2 pl-2">
                             <BiBuilding className="w-5 h-5" />
                             <h3 className="text-gray-400">Malmö, Sweden</h3>
                         </div>

                         <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
                             <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                                 <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                             </div>
                             <p>Available for work</p>
                         </Button>
                     </div>
                <a className="bg-sky-600 dark:bg-white  text-white dark:text-black font-[Arial] font-bold text-xl px-6 py-3 rounded-[20px] shadow-md" href="#">Resume</a>
            </div>

        </section>

        //     <nav className="py-10 sm:mb-12 space-x-2 flex justify-between dark:text-white items-center">
        //         <h1 className="text-xl font-rubik uppercase font-extrabold">Oliver Blomdell</h1>
        //         <ul className="flex items-center">
        //             <li>
        //                 <ThemeToggle />
        //             </li>
        //             <li>
        //                 <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 md:ml-8" href="#">Resume</a>
        //             </li>
        //         </ul>
        //     </nav>

        //     <div className="relative mx-auto w-50 h-50">
        //         <Image src="/images/profilepic.png" layout="fill" objectFit="cover" alt="Profile picture" />
        //     </div>
        //     <div className="text-center pt-10">
        //         <h2 className="font-rubik font-extrabold text-4xl md:text-6xl">Oliver<br />Blomdell</h2>
        //         <h3 className="font-roboto-mono uppercase font-bold text-xl py-2 md:text-3xl">Information Architect</h3>
        //         {/* <p className="text-pretty tracking-tight py-5 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi pariatur vitae cum laboriosam illum atque rem numquam.</p> */}
        //         <div className="mt-5 text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        //             <a
        //                 href="https://www.linkedin.com/in/oliverblomdell/"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 aria-label="LinkedIn"
        //                 className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
        //             >
        //                 <AiFillLinkedin />
        //             </a>
        //             <a
        //                 href="https://github.com/oblomdell"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 aria-label="GitHub"
        //                 className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
        //             >
        //                 <AiFillGithub /></a>
        //             <a
        //                 href="mailto:oblomdell@gmail.com"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 aria-label="E-Mail"
        //                 className="transition-transform duration-200 hover:scale-110 hover:text-teal-600 dark:hover:text-teal-400"
        //             >
        //                 <AiFillMail /></a>
        //         </div>

        //         <div className="flex justify-center py-2">
        //             <div className="flex sm:flex-row sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
        //                 <div className="flex items-center gap-2 pl-2">
        //                     <BiBuilding className="w-5 h-5" />
        //                     <h3 className="text-gray-400">Malmö, Sweden</h3>
        //                 </div>

        //                 <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
        //                     <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
        //                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
        //                         <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        //                     </div>
        //                     <p>Available for work</p>
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>

        // <Link href="#" className="mt-5 mx-auto w-50 border bg-black/30 border-gray-700/40 flex group items-center justify-center p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
        //     <span>Explore my work</span>
        //     <BiChevronDown className="text-2xl ml-2"></BiChevronDown>
        // </Link>
    );
}