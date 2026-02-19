import ClickSpark from "./ClickSpark";
import Stack from "./Stack";

export function About() {
  const obsidianNotes = [
    <img
      loading="lazy"
      src={"/obsidian1.png"}
      alt="obsidian notes"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/obsidian2.png"}
      alt="network img"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/obsidian3.png"}
      alt="obsidian notes list"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const TedXImages = [
    // <img
    //   loading="lazy"
    //   src={"/ted2.jpg"}
    //   alt="TEDx"
    //   className="w-full h-full object-cover pointer-events-none"
    // />,
    <img
      loading="lazy"
      src={"/ted1.png"}
      alt="TEDx"
      className="w-full h-full object-cover pointer-events-none"
    />,
  
  ];
  const gameDev = [
    <img
      loading="lazy"
      src={"/@mini-moss · minimoss.gif"}
      alt="game gif"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/game.png"}
      alt="eleanore char"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/game2.jpg"}
      alt="unity"
      className="w-full h-full object-cover pointer-events-none"
    />,
  ];
  const bytes4Future = [
    <img
      loading="lazy"
      src={"/bytes.jpeg"}
      alt="bytes1"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/bytes2.jpeg"}
      alt="bytes2"
      className="w-full h-full object-cover pointer-events-none"
    />,
    <img
      loading="lazy"
      src={"/bytesfinal.jpeg"}
      alt="bytes2"
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
                  by the{" "}
                  <a
                    href="https://akf.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    Aga Khan Foundation
                  </a>
                  , an intensive internship focused on building real-world
                  software engineering skills. The program emphasized practical
                  development, problem-solving, teamwork, and modern engineering
                  practices, helping me strengthen my foundation in software
                  development while working on meaningful, impact-driven
                  projects.
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

          {/* TED X volunteering  */}
          <div className="p-8 md:p-12 border-r border-t border-gray-200 dark:border-gray-800 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="w-full max-w-[520px] aspect-[520/280]">
                  <Stack
                    cards={TedXImages}
                    randomRotation
                    autoplay
                    autoplayDelay={2000}
                  />
                </div>
              </div>
              <div>
                <div className="text-lg font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
                  · Volunteering
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl text-[16px]">
                   I am currently volunteering with{" "}
                  <a
                    href="https://tedxdamascus.sy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    TEDx Damascus
                  </a>{" "}
                  in Syria as a{" "}
                  <span className="text-black dark:text-white font-semibold">
                    Backend Developer
                  </span>{" "}
                  on the technical team. I contributed to building and
                  maintaining backend services that supported event operations,
                  focusing on data handling, system reliability, and clean API
                  design while collaborating closely with cross-functional teams
                  under real production constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
