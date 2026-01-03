import { ExternalLink, Github } from "lucide-react";
import ClickSpark from "./ClickSpark";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    name: "EasyRent Rental Platform",
    description:
      "Comprehensive rental management application built with Flutter, enabling landlords and tenants to streamline property management workflows.",
    techStack: ["Flutter", "Dart", "Firebase", "Provider"],
    repo: "https://github.com/yourusername/easyrents",
  },
  {
    name: "ObsidianPasswordManager",
    description:
      "Secure password manager seamlessly integrated with Obsidian, combining note-taking with encrypted credential storage.",
    techStack: ["Flutter", "Encryption", "Obsidian API", "SQLite"],
    repo: "https://github.com/yourusername/obsidian-password-manager",
  },
  {
    name: "MonumentalHabits",
    description:
      "Habit tracking and productivity app designed to help users build consistent routines and achieve long-term goals.",
    techStack: ["Flutter", "BLoC", "Local Storage", "Notifications"],
    repo: "https://github.com/yourusername/monumental-habits",
  },
  {
    name: "EventManagement Backend",
    description:
      "Robust backend system for managing events, users, and scheduling with RESTful APIs and real-time capabilities.",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    repo: "https://github.com/yourusername/event-management-backend",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-black border-t border-b border-gray-200 dark:border-gray-800 transition-colors duration-500"
    >
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        {/* Side rails */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        {/* Header */}
        <div className="max-w-7xl mx-auto border-l border-r border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:p-12">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · 01 / projects.json
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                My Work
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Selected projects across mobile, backend, and system design.
              </p>
            </div>
            <div className="hidden md:block md:col-span-2 border-l border-gray-200 dark:border-gray-800" />
          </div>
        </div>

        {/* Timeline spine */}
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative border-t border-gray-200 dark:border-gray-800"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2">
                  <div className="w-3 h-3  bg-black dark:bg-white" />
                </div>

                {/* Section content */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    isLeft ? " " : "md:flex-row-reverse "
                  }`}
                >
                  <div
                    className={`p-8 md:p-16 ${
                      isLeft ? "md:pr-24" : "md:pl-24 md:col-start-2"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-black dark:text-white">
                        {project.name}
                      </h3>

                      <div className="flex gap-3 ml-4">
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ClickSpark>
    </section>
  );
}
