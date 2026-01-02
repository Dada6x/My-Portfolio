import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 ">
      <ThemeToggle />
      <Hero />
      <Projects />
      <div className="w-full h-[500px] bg-red-300"></div>
      <About />
      <div className="w-full h-[500px] bg-black"></div>
      <Contact />
    </div>
  );
}

export default App;
