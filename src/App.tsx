import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/NavBar";
import ClickSpark from "./components/ClickSpark";
import { skills } from "./data/skills";
import { ToolsAndFrameworks } from "./components/ToolsAndFrameworks";
import { Route, Routes } from "react-router-dom";
import { Lab } from "./components/Lab";
import CertificationsPage from "./components/certi";
import { useEffect } from "react";

function App() {
  const imageLogos = skills.map((skill) => ({
    src: skill.src,
    alt: skill.name,
    href: `https://www.google.com/search?q=${encodeURIComponent(skill.name)}`,
  }));

  // In React, e.g., in App.tsx or a top-level component
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProjectsList />
                <About />
                <ToolsAndFrameworks logos={imageLogos} />
                <Contact />
              </>
            }
          />

          {/* Lab Page */}
          <Route path="/lab" element={<Lab />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </ClickSpark>
    </div>
  );
}

export default App;

//TODO
// prevent inspector mode
//
