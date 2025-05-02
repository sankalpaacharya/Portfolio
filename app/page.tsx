import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="circle-gradient mt-10" />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
