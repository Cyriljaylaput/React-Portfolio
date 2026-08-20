import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
    {
        image: project1,
        title: "Next.js Application",
        description:
            "My first Next.js application, built while learning modern web development and deployment.",
        link: "https://my-website-njmth77sr-cyriljaylaputs-projects.vercel.app/",
    },
    {
        image: project2,
        title: "Church Website",
        description:
            "A clean and responsive church website focused on simple design and an easy user experience.",
        link: "https://atwoc.netlify.app/",
    },
    {
        image: project3,
        title: "Coming Soon",
        description:
            "I'm currently working on more projects as I continue learning and improving my React skills.",
        link: "https://dribbble.com/tags/shopping-website",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-24"
        >
            {/* Section Heading */}
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
                    My{" "}
                    <span className="text-green-800">
                        Projects
                    </span>
                </h2>

                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                    Here are some of the projects I've built while learning
                    and exploring web development.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover"
                        />

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {project.description}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-5 text-green-800 font-semibold hover:text-green-900 hover:underline transition"
                            >
                                View Project 
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;