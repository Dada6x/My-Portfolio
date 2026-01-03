import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/NavBar";
import ClickSpark from "./components/ClickSpark";
import { skills } from "./data/skills";
import { ToolsAndFrameworks } from "./components/ToolsAndFrameworks";

function App() {
  const imageLogos = skills.map((skill) => ({
    src: skill.src,
    alt: skill.name,
    href: `https://www.google.com/search?q=${encodeURIComponent(skill.name)}`,
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <Navbar />
        <Hero />
          <ProjectsList />
        <About />
        <ToolsAndFrameworks logos={imageLogos} />

        <Contact />
      </ClickSpark>
    </div>
  );
}

export default App;

// edit the colors in the dark
// make an game dev section  https://reactbits.dev/backgrounds/faulty-terminal
// make an cybersecurity section https://reactbits.dev/backgrounds/letter-glitch
//TODO
// work the projects
// project details
// fonts
// darkmode coloring
