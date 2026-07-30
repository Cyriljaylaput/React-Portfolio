import heroImg from "@/assets/hero-img.png";

function Hero() {
    return (
        <section id="home"
         className="max-w-7xl mx-auto px-20 py-16">
            <div className="flex items-center justify-between gap-16">

                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight max-w-md">
                        Hi, I'm building
                        my first <span className="text-green-800">React</span> app.
                    </h1>

                    <p className="mt-1 text-md text-gray-600">
                        a simple, modern, and responsive web application built
                        with react
                    </p>

                    <button className="mt-4 bg-green-800 text-white px-6 py-3 rounded-lg  hover:bg-green-900 transition cursor-pointer">
                        <a 
                        href="#about"
                        className="inline-block"
                        >
                            Get Started
                        </a>
                    </button>
                </div>
                <img
                    src={heroImg}
                    alt="Hero Image"
                    className="w-full max-w-lg"
                />
                <div>

                </div>

            </div>
        </section>
    );
}
export default Hero;