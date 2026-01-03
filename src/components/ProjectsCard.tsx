import ClickSpark from "./ClickSpark";
import { Project } from "./ProjectsList";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ClickSpark sparkSize={10} sparkRadius={20} sparkCount={10} duration={400}>
      <div
        className={`p-8 md:p-12 border-t border-gray-200 dark:border-gray-800 group 
        ${index % 2 === 1 ? "md:border-l" : ""}
        hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors duration-200 relative`}
      >
        <h3 className="text-xl font-bold text-black dark:text-white mb-4">
          {project.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Image */}
        {project.image && (
          <a href={project.repo}>
            <img
              src={project.image}
              alt={project.name}
              className="
    mt-8 w-full rounded-2xl z-30
    transform transition-transform duration-500 ease-out
    group-hover:scale-105
    group-hover:-rotate-6
    group-hover:-translate-y-2
  "
            />
          </a>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white"
            >
              View on GitHub
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className=" group px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </ClickSpark>
  );
}
