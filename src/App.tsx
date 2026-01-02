import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/NavBar";
import ClickSpark from "./components/ClickSpark";
import LogoLoop from "./components/LogoLoop";

function App() {
  // Alternative with image sources
  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <Navbar />
        <Hero />
        <Projects />
        <div className="w-full h-[250px] bg-white dark:bg-black duration-500 "></div>
        <About />
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>{" "}
        <Contact />
      </ClickSpark>
    </div>
  );
}

export default App;

// edit the colors in the dark
// make an game dev section  https://reactbits.dev/backgrounds/faulty-terminal
// make an cybersecurity section https://reactbits.dev/backgrounds/letter-glitch
