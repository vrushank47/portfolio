import Navbar from "../layouts/navbar";
import Background from "../layouts/background";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Projects from "../components/home/projects";
import Contact from "../components/home/contact";
const Home = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Projects /> 
      <Contact />
           
     
    </>
  );
};

export default Home;