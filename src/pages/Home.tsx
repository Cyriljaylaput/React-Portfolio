import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects /> 
      <About />
      <Footer />
    </>
  );
}

export default HomePage;