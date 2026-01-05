import ClickSpark from "./ClickSpark";
import Stack from "./Stack";
import { useTheme } from "../contexts/ThemeContext";

export function About() {
  const { theme } = useTheme();
  const obsidianNotes = [
    <img
      src={"/obsidian1.png"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"/obsidian2.png"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"/obsidian3.png"}
      alt="Game 3"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const gameDev = [
    <img
      src={"/@mini-moss · minimoss.gif"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"/game.png"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"/game2.jpg"}
      alt="Game 3"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const bytes4Future = [
    <img
      src={"/bytes.jpeg"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"/bytes2.jpeg"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-black  border-gray-200 dark:border-gray-800 border-r border-t border-b transition-colors duration-500 "
    >
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800 border-b ">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · 02 / about.md
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a{" "}
                  <span className="text-black dark:text-white font-semibold">
                    Software Engineer
                  </span>{" "}
                  at Damascus University , passionate about building robust
                  applications and exploring the depths of technology.
                </p>
                <p>
                  Beyond my professional work, I'm an indie game developer using
                  Unity, where I bring creative ideas to life through
                  interactive experiences.
                </p>
                <p>
                  My technical interests span across multiple domains, with a
                  particular focus on
                  <span className="text-black dark:text-white font-semibold">
                    {" "}
                    cybersecurity
                  </span>{" "}
                  and
                  <span className="text-black dark:text-white font-semibold">
                    {" "}
                    networking
                  </span>
                  . I believe in understanding systems at their core to build
                  better, more secure solutions.
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-800 ">
              <div className="text-lg font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider ">
                · my github contributions
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <img
                    alt="github-snake"
                    src={
                      theme === "dark"
                        ? "https://raw.githubusercontent.com/Dada6x/Dada6x/output/github-snake-dark.svg"
                        : "https://raw.githubusercontent.com/Dada6x/Dada6x/output/github-snake.svg"
                    }
                    className="max-w-full h-auto transition-opacity duration-300"
                  />
                </div>
              </div>
              <ul className="text-sm font-mono text-gray-500 dark:text-gray-600 tracking-wider space-y-2 mt-6">
                <li>• currently learning nest.js and backend architecture</li>
                <li>
                  • interested in networking, protocols, and cybersecurity
                </li>
              </ul>
            </div>
          </div>

          {/* Obsidian knowledge */}
          <div className="p-8 md:p-12 border-l border-gray-200 dark:border-gray-800 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <div className="text-lg font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · knowledge sharing
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-[16px]">
                  I maintain an{" "}
                  <span className="text-black dark:text-white font-semibold">
                    Obsidian knowledge base
                  </span>{" "}
                  where I document and share everything I learn about software
                  engineering, creating a living library of insights, best
                  practices, and architectural patterns.
                </p>
              </div>
              {/* Stack of images */}
              <div className="relative">
                <div className="w-full max-w-[520px] aspect-[520/280]">
                  <Stack
                    cards={obsidianNotes}
                    randomRotation
                    autoplay
                    autoplayDelay={2000}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*! GAME DEVELOPMENT  SECTION */}
          <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800 border-t border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* IMAGE */}
              <div className="relative order-2 md:order-1">
                v
                <div className="w-full max-w-[520px] aspect-[520/280]">
                  <Stack
                    cards={gameDev}
                    randomRotation
                    autoplay
                    autoplayDelay={2000}
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="order-1 md:order-2">
                <div className="text-lg font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · Game Development
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-[16px]">
                  I am an{" "}
                  <span className="text-black dark:text-white font-semibold">
                    indie game developer
                  </span>{" "}
                  working primarily with Unity, where I design and implement
                  gameplay mechanics, player systems, and interactive
                  environments. I enjoy building games from the ground up,
                  focusing on clean architecture, performance, and creating
                  engaging experiences that balance technical depth with
                  creative design.
                </p>
              </div>
            </div>
          </div>

          {/* Bytes4Future */}
          <div className="p-8 md:p-12 border-l border-gray-200 dark:border-gray-800 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-lg font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · Internship
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-[16px]">
                  I participated in the{" "}
                  <span className="text-black dark:text-white font-semibold">
                    Bytes4Future program
                  </span>{" "}
                  by the Aga Khan Foundation, an intensive internship focused on
                  building real-world software engineering skills. The program
                  emphasized practical development, problem-solving, teamwork,
                  and modern engineering practices, helping me strengthen my
                  foundation in software development while working on
                  meaningful, impact-driven projects.
                </p>
              </div>
              <div className="relative">
                <div className="w-full max-w-[520px] aspect-[520/280]">
                  <Stack
                    cards={bytes4Future}
                    randomRotation
                    autoplay
                    autoplayDelay={2000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
