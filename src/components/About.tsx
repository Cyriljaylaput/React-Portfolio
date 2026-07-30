import cyril from "@/assets/cyril.jpg";
export function About() {

    return (
        <section
            id="about"
            className="max-w-7xl mx-auto px-20 py-15"
        >
            <h2 className="text-4xl font-bold text-center text-gray-700">
                About
                <span className="text-green-800">
                    me
                </span>
            </h2>

            <div className="flex items-center justify-between gap-20 mt-10">

                <div className="flex-1">

                </div>
                <img
                    src={cyril}
                    alt="Hero Image"
                    className="w-full h-100 max-w-sm rounded-full"
                />
                <div>

                    <h1 className="text-5xl font-bold text-gray-800 leading-tight max-w-md">
                        Hi, I'm
                        <span className="text-green-800"> CyrilJay</span> Laput.

                    </h1>

                    <p className="mt-2 text-md text-gray-600">
                        Hi, I'm Cyril Jay Laput, a beginner front-end developer and IT student who is passionate about
                        learning web development. I enjoy building clean, responsive, and user-friendly websites using
                        modern technologies like React and Tailwind CSS. I'm continuously improving my
                        skills by creating projects and exploring new tools to become a better developer every day.
                    </p>

                    <button className="mt-4 bg-green-800 text-white px-6 py-3 rounded-lg  hover:bg-green-900 transition cursor-pointer">
                        <a
                            href="https://www.facebook.com/laputcyriljay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:underline"
                        >
                            Visit Facebook
                        </a>
                    </button>


                </div>

            </div>
        </section>
    );
}

export default About;