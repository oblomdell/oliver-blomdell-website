export default function Contact() {
    return (
        <section className="text-center mb-[60px] md:mb-[100px] xl:mb-[200px]">
            <h1 className="font-rubik font-extrabold uppercase text-[32px]/9 md:text-[40px]/12 xl:text-5xl mb-[30px] md:mb-[60px] xl:mb-[75px]">Contact</h1>

            <form className="mx-auto w-[250px] md:w-[600px] xl:w-[800px] text-sm md:text-xl">
                <div className="mb-[30px] md:mb-[40px]">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="font-[Arial] w-full rounded-md border border-gray-300 dark:border-gray-400 bg-white dark:bg-neutral-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-white"
                        required
                    />
                </div>

                <div className="mb-[30px] md:mb-[40px]">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className=" font-[Arial] w-full rounded-md border border-gray-300 dark:border-gray-400 bg-white dark:bg-neutral-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-white"
                        required
                    />
                </div>

                <div className="mb-[30px] md:mb-[40px]">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows={8     }
                        className="font-roboto-mono w-full rounded-md border border-gray-300 dark:border-gray-400 bg-white dark:bg-neutral-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-white"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-sky-600 dark:bg-white text-white dark:text-black font-[Arial] font-bold text-xl px-7 py-3 rounded-[20px] shadow-md transition-transform duration-200 hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </section>
    );
}