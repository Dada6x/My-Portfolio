import { ExternalLink, Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    name: 'EasyRent',
    description: 'Comprehensive rental management application built with Flutter, enabling landlords and tenants to streamline property management workflows.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    repo: 'https://github.com/yourusername/easyrents',
  },
  {
    name: 'ObsidianPasswordManager',
    description: 'Secure password manager seamlessly integrated with Obsidian, combining note-taking with encrypted credential storage.',
    techStack: ['Flutter', 'Encryption', 'Obsidian API', 'SQLite'],
    repo: 'https://github.com/yourusername/obsidian-password-manager',
  },
  {
    name: 'MonumentalHabits',
    description: 'Habit tracking and productivity app designed to help users build consistent routines and achieve long-term goals.',
    techStack: ['Flutter', 'BLoC', 'Local Storage', 'Notifications'],
    repo: 'https://github.com/yourusername/monumental-habits',
  },
  {
    name: 'EventManagement Backend',
    description: 'Robust backend system for managing events, users, and scheduling with RESTful APIs and real-time capabilities.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/yourusername/event-management-backend',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r border-gray-200 dark:border-gray-800">
          <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
              · 01 / projects.json
            </div>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
              My Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              A collection of projects showcasing mobile development, backend architecture, and scalable systems.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 border-l border-gray-200 dark:border-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 border-t border-gray-200 dark:border-gray-800 ${
                index % 2 === 1 ? 'border-l' : ''
              } ${index % 2 === 1 ? 'md:border-l border-gray-200 dark:border-gray-800' : ''} group hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors duration-200`}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {project.name}
                </h3>
                <div className="flex gap-3 ml-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="View repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
