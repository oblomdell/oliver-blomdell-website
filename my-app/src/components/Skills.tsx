import { FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiFigma } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-sky-500 dark:text-sky-300" /> },
        { name: "Next.js", icon: <RiNextjsLine className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-600 dark:text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 dark:text-sky-400" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500 dark:text-pink-400" /> },
        // { name: "Accessibility", icon: <SiA11y className="text-purple-500 dark:text-purple-300" /> },
        // { name: "Information Architecture", icon: <SiInformationarchitect className="text-gray-700 dark:text-gray-200" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500 dark:text-orange-400" /> },
    ];

    return (
        <section className="text-center mb-[60px] md:mb-[100px] xl:mb-[200px]">
            <h1 className="font-rubik font-extrabold uppercase text-[32px]/9 md:text-[40px]/12 xl:text-5xl mb-[30px]">
                Skills
            </h1>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto font-roboto-mono text-sm text-gray-800 dark:text-gray-200">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center gap-2 px-4 py-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-none bg-white dark:bg-black/20 transition-transform duration-200 hover:scale-105"
                    >
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="text-base">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}