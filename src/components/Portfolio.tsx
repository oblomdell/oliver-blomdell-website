import projectData from "@/data/projects.json";

import { AiFillGithub, AiFillApple } from "react-icons/ai";
import { CgExternal } from "react-icons/cg";
import { FaAppStoreIos } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section className="text-center mb-[60px] md:mb-[100px] xl:mb-[200px] px-[60px] md:px-[120px]">
      <h1 className="font-rubik font-extrabold uppercase text-[32px]/9 md:text-[40px]/12 xl:text-5xl mb-[30px] md:mb-[60px] xl:mb-[75px]">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="h-full bg-white dark:bg-black/20 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 flex flex-col gap-4 min-h-[500px]">
            <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover rounded-t-md" />
            <h2 className="font-roboto-mono text-lg font-bold px-2">{project.title}</h2>
            <p className="text-sm font-roboto-mono text-gray-600 dark:text-gray-300 px-2">{project.description}</p>
            
            <div className="text-xs text-gray-500 dark:text-gray-400">{project.tech.join(" • ")}</div>

            <div className="mt-auto flex flex-col gap-4 px-4 mb-4">
              {project.github && !project.appstore && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-[Arial] font-bold border rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <AiFillGithub />GitHub
                </a>
              )}

              {project.appstore && (
                <a href={project.appstore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-[Arial] font-bold border rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <FaAppStoreIos />App Store
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-[Arial] font-bold border rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/10 transition"><CgExternal />Demo film</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
