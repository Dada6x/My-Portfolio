import ClickSpark from "./ClickSpark";
import Stack from "./Stack";

export function About() {
  const obsidianNotes = [
    <img
      src={"assets/obsidian1.png"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"assets/obsidian2.png"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"assets/obsidian3.png"}
      alt="Game 3"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const gameDev = [
    <img
      src={"assets/@mini-moss · minimoss.gif"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"assets/game.png"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"https://obsidian.md/images/publish-example-dark.png"}
      alt="Game 3"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const bytes4Future = [
    <img
      src={"assets/bytes.jpeg"}
      alt="Game 1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"assets/bytes2.jpeg"}
      alt="Game 2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      src={"assets/bytes1.jpg"}
      alt="Game 3"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-black   border-gray-200 dark:border-gray-800 border-r border-t border-b transition-colors duration-500 "
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

            <div className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-800">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · passions & interests
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-mono text-xs text-black dark:text-white mb-2 tracking-wider">
                    Technical Focus
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Cybersecurity & ethical hacking</li>
                    <li>• Network architecture & protocols</li>
                    <li>• Indie game development (Unity)</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="font-mono text-xs text-black dark:text-white mb-2 tracking-wider">
                    Beyond Code
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Regular gym training</li>
                    <li>• Extensive reading</li>
                    <li>• Obsidian knowledge base</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Obsidian knowledge */}
          <div className="p-8 md:p-12 border-l border-gray-200 dark:border-gray-800 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · knowledge sharing
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
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
                <div style={{ width: 600, height: 300 }}>
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
          <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800 border-t border-b ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative order-1 md:order-1">
                <div style={{ width: 520, height: 280 }}>
                  <Stack
                    cards={gameDev}
                    randomRotation
                    autoplay
                    autoplayDelay={2000}
                  />
                </div>
              </div>

              <div className="order-2 md:order-2">
                <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · Game Development
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
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
                <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · Internship
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
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
                <div style={{ width: 520, height: 280 }}>
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
