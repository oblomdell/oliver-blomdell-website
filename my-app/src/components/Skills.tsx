import {
    FaReact,
    FaFigma,
    FaGitAlt,
    FaUniversalAccess,
    FaSitemap,
    FaNodeJs,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript, BiTransfer } from "react-icons/bi";
import {
    SiTailwindcss,
    SiExpress,
    SiMiro,
    SiSvelte,
    SiExpo,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-cyan-300" /> },
        { name: "Next.js", icon: <RiNextjsLine className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-600 dark:text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-cyan-300" /> },
        { name: "Expo Go", icon: <SiExpo className="text-black dark:text-white" /> },
        { name: "Svelte", icon: <SiSvelte className="text-orange-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-lime-600" /> },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "REST", icon: <BiTransfer className="text-black dark:text-white" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500 dark:text-pink-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500 dark:text-orange-400" /> },
        // { name: "Miro", icon: <SiMiro className="bg-yellow-400 text-black rounded-md p-1 dark:bg-yellow-300" /> },
        // { name: "Accessibility", icon: <FaUniversalAccess className="text-purple-500 dark:text-purple-300" /> },
        // { name: "Information Architecture", icon: <FaSitemap className="text-gray-700 dark:text-gray-200" /> },
    ];

    return (
        <section className="text-center mb-[60px] md:mb-[100px] xl:mb-[200px] px-6">
            <h1 className="font-rubik font-extrabold uppercase text-[32px]/9 md:text-[40px]/12 xl:text-5xl mb-[30px]">
                Skills
            </h1>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto font-roboto-mono text-sm text-gray-800 dark:text-gray-200">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center gap-2 px-4 py-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-none bg-white dark:bg-black/20 transition-transform duration-200 hover:scale-105"
                    >
                        <span className="text-3xl" title={skill.name}>{skill.icon}</span>
                        <span className="text-base">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}