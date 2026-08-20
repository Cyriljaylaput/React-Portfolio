import heroImg from "@/assets/CyPort.png";

function Hero() {
    return (
        <section
            id="home"
            className="max-w-7xl mx-auto px-6 md:px-20 py-8 md:py-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-12">

                {/* Hero Text */}
                <div className="flex-1">

                    <p className="text-green-800 font-medium mb-3">
                        Welcome to my portfolio 👋
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight max-w-xl">
                        Hi, I'm building my first{" "}
                        <span className="text-green-800">React</span> app.
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-lg">
                        A simple and responsive web application where I'm
                        learning, experimenting, and improving my skills with
                        React and modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-7">

                        <a
                            href="#projects"
                            className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition"
                        >
                            View My Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-green-800 hover:text-green-800 transition"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={heroImg}
                        alt="Illustration of a developer working on a React project"
                        className="w-auto h-[380px] md:h-[440px] lg:h-[480px] object-contain"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;