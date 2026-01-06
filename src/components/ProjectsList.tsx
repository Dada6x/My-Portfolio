import ClickSpark from "./ClickSpark";
import { ProjectCard } from "./ProjectsCard";

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
  liveDemo?: string;
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    name: "EasyRent Rental Platform",
    description:
      "Comprehensive rental management application built with Flutter, enabling landlords and tenants to streamline property management workflows.",
    techStack: [
      "Flutter",
      "GetX",
      "Stripe",
      " 360° panoramic views",
      "Map View",
    ],
    repo: "https://github.com/dada6x/easyrent-Rental-Platform",
    image: "/easyRent.png",
    accentColor: "#0061ff",
    liveDemo: "https://easyrent-rental-platform.vercel.app",
  },
  // {
  //   name: "ObsidianPasswordManager",
  //   description:
  //     "Secure password manager seamlessly integrated with Obsidian, combining note-taking with encrypted credential storage.",
  //   techStack: ["Flutter", "Encryption", "Obsidian API", "SQLite"],
  //   repo: "https://github.com/yourusername/obsidian-password-manager",
  //   image: "",
  //   accentColor: "#ffcc66",
  // },
  {
    name: "MonumentalHabits",
    description:
      "Habit tracking and productivity app designed to help users build consistent routines and achieve long-term goals.",
    techStack: ["Flutter", "GetX", "Local Storage", "Notifications"],
    repo: "https://github.com/Dada6x/Monumental-habits/",
    image: "/Habitly.png",
    accentColor: "#ffffff",
  },
  {
    name: "CheckMate",
    description:
      "A real-time multiplayer chess game built with Flutter, Supabase, and the Bishop Chess Engine, featuring smooth animations, elegant UI, and real-time board synchronization using FEN. Each player has a distinct name, displayed during online matches.",
    techStack: ["Flutter", "GetX", "Bishop Engine", "Supabase"],
    repo: "https://github.com/Dada6x/MultiPlayer-Chess-Game",
    image: "/checkmate.png",
    accentColor: "#1a1b2f",
    liveDemo: "https://multi-player-chess-game-qzty.vercel.app",
  },
  {
    name: "Event Management Backend",
    description:
      "Robust backend system for managing events, users, and scheduling with RESTful APIs and real-time capabilities.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    repo: "https://github.com/yourusername/event-management-backend",
    image: "",
    accentColor: "#ffcc66",
  },
];

export function ProjectsList() {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-500  border-t"
    >
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute inset-y-0 right-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="max-w-7xl mx-auto   border-gray-200 dark:border-gray-800 border-r border-l">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-r border-gray-200 dark:border-gray-800">
            <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · 01 / projects.json
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                My Work
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                A collection of projects showcasing mobile development, backend
                architecture, and scalable systems.
              </p>
            </div>
            <div className="md:col-span-2" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}
