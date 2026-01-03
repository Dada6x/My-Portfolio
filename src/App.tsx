import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/NavBar";
import ClickSpark from "./components/ClickSpark";
import LogoLoop from "./components/LogoLoop";
import { skills } from "./data/skills";

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
        <div className="w-full h-[250px] bg-white dark:bg-black transition-colors duration-500" />
        <Projects />
        <div className="w-full h-[250px] bg-white dark:bg-black transition-colors duration-500" />
        <About />
        <div className="mx-auto max-w-7xl h-[200px] flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={70}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Skills & technologies"
          />
        </div>
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