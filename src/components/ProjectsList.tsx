import ClickSpark from "./ClickSpark";
import { ProjectCard } from "./ProjectsCard";

export interface Project {
  name: string;
  description: string;
  details?: string;
  techStack: string[];
  link?: string;
  repo?: string;
  liveDemo?: string;
  image: string;
  screenshots?: string[];
  accentColor: string;
}

const projects: Project[] = [
  {
    name: "EasyRent Rental Platform",
    description:
      "Comprehensive rental management application built with Flutter, enabling landlords and tenants to streamline property management workflows.",
    details:
      "A full-featured rental platform with property listings, tenant management, payment processing via Stripe, and interactive property views including 360° panoramic tours and map integration. Built with Flutter for cross-platform compatibility.",
    techStack: [
      "Flutter",
      "GetX",
      "Stripe",
      " 360° panoramic views",
      "Map View",
    ],
    repo: "https://github.com/dada6x/easyrent-Rental-Platform",
    image: "/easyRent.png",
    screenshots: [
      "/easyrent5.png",
      "/easyrent2.png",
      "/easyrent3.jpg",
      "/easyrent4.jpg",
      "/easyrent1.png",
    ],
    accentColor: "#0061ff",
    liveDemo: "https://easyrent-rental-platform.vercel.app",
  },
  {
    name: "Monumental Habits",
    description:
      "Habit tracking and productivity app designed to help users build consistent routines and achieve long-term goals.",
    details:
      "A comprehensive habit tracker with daily, weekly, and monthly progress tracking, streak counters, motivational notifications, and detailed analytics to help users build and maintain positive habits.",
    techStack: ["Flutter", "GetX", "Local Storage", "Notifications"],
    repo: "https://github.com/Dada6x/Monumental-habits/",
    image: "/Habitly.png",
    screenshots: [
      "/habilty4.png",
      "/habitly2.png",
      "habitly3.png",
      "habilty5.png",
      "/habitly1.png",
      "habitly6.png",
    ],
    accentColor: "#ffffff",
  },
  {
    name: "Check Mate",
    description:
      "A real-time multiplayer chess dish built with Flutter, Supabase, and the Bishop Chess Engine, featuring smooth animations, elegant UI, and real-time board synchronization using FEN. Each player has a distinct name, displayed during online matches.",
    details:
      "Supports local multiplayer, AI matches, and online real-time play with full FEN-based state sync. Includes dynamic theming (light/dark mode), move sound effects, win confetti animations, and offline support. Built using a modular architecture with GetX for state management and Supabase for scalable backend services.",
    techStack: ["Flutter", "GetX", "Bishop Engine", "Supabase"],
    repo: "https://github.com/Dada6x/MultiPlayer-Chess-Game  ",
    image: "/checkmate.png",
    screenshots: ["/checkmate1.jpg", "/checkmate2.jpg", "/checkmate3.jpg"],
    accentColor: "#1a1b2f",
    liveDemo: "https://multi-player-chess-game-qzty.vercel.app  ",
  },
  {
    name: "Event Management (Backend)",
    description:
      "Robust backend system for managing events, users, and scheduling with RESTful APIs and real-time capabilities.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    repo: "https://github.com/yourusername/event-management-backend",
    image: "",
    accentColor: "#ffcc66",
    screenshots: ["/swagger.png", "/MongoDB.png"],
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
