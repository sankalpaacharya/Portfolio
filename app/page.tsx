import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="md:max-w-3xl max-w-xl mx-auto md:p-10 py-10 px-5">
      <div className="circle-gradient mt-10" />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
