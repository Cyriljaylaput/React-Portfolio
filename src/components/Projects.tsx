import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

function Projects() {
    return (
        <section
            id="projects"
            className="max-w-7xl mx-auto px-20 py-24"
        >
            <h2 className="text-4xl font-bold text-center text-gray-700">
                My
                <span className="text-green-800">
                    Projects
                </span>
            </h2>

            <p className="text-center text-gray-500 mt-3">
                Here are some of the projects I've built while learning React.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-14">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
                    <img
                        src={project1}
                        alt="Project 1"
                        className="w-full h-48 object-cover rounded-lg"
                    />

                    <h3 className="text-2xl font-semibold mt-6 text-gray-900">
                        Next.js Application
                    </h3>

                    <p className="text-gray-500 mt-3">
                        My first Nextjs application built with
                        Vercel and HTML.
                    </p>

                    <button className="mt-6 text-green-600 font-semibold hover:underline">
                        <a
                            href="https://my-website-njmth77sr-cyriljaylaputs-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:underline"
                        >
                            View Project
                        </a>
                    </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
                    <img
                        src={project2}
                        alt="project2"
                        className="w-full h-48 object-cover rounded-lg"
                    />

                    <h3 className="text-2xl font-semibold mt-6 text-gray-900">
                        Church Website
                    </h3>

                    <p className="text-gray-500 mt-3">
                        A clean and responsive website using
                        modern UI principles.
                    </p>

                    <button className="mt-6 text-green-600 font-semibold hover:underline">
                        <a
                            href="https://atwoc.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:underline"
                        >
                            View Project
                        </a>
                    </button>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
                    <img 
                    src={project3} 
                    alt="project3" 
                    className="w-full h-48 object-cover rounded-lg"
                    />

                    <h3 className="text-2xl font-semibold mt-6 text-gray-900">
                        Coming Soon
                    </h3>

                    <p className="text-gray-500 mt-3">
                        More awesome projects will be added
                        as I continue learning React.
                    </p>

                    <button className="mt-6 text-green-600 font-semibold hover:underline">
                        <a 
                        href="https://dribbble.com/search/shopping%20website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:underline" 
                        >
                            View Project
                        </a>
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Projects;