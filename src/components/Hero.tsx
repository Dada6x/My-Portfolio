import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Squares from "./Squares";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white  dark:bg-black transition-colors duration-500 pb-7 border-r border-black">
      {/* ================= Squares Background ================= */}
      <div className="absolute inset-0 z-0">
        <Squares squareSize={64} />
      </div>

      {/* ================= Vertical frame lines ================= */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 z-10" />

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-16 flex items-center pointer-events-none">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 md:col-span-9">
            {/* Title */}
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-black dark:text-white leading-tight tracking-tighter">
              Yahiea Dada
            </h1>

            {/* Description */}
            <p className="mb-12 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Building robust mobile applications with <AnimatedTech />,{" "}
              designing backend systems, and exploring cybersecurity and
              networking architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pointer-events-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white"
              >
                view my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-mono text-sm border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
              >
                contact me
              </button>
            </div>

            {/* Footer */}
            <div className="mt-16 text-s font-mono text-gray-500 dark:text-gray-600 ">
              Damascus University • Software Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------
   Animated Tech Component
-------------------------------- */

const techs = [
  {
    name: "Flutter",
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  {
    name: "React",
    text: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
  },
  {
    name: "Nest",
    text: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/40",
  },
];

function AnimatedTech() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tech = techs[index];

  return (
    <span className="inline-block relative h-6 align-middle mx-1 px-9 pb-1">
      <AnimatePresence mode="wait">
        <motion.code
          key={tech.name}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`absolute left-0 px-2 py-1 rounded font-mono text-sm ${tech.text} ${tech.bg}`}
        >
          {tech.name}
        </motion.code>
      </AnimatePresence>
    </span>
  );
}
