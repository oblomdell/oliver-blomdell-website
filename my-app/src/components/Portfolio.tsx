export default function Portfolio() {
    return (
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
    );
}