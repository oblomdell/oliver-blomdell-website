export default function About() {
    return(
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
    )
}