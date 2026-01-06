import { useState, useEffect } from "react";
import { Project } from "./ProjectsList";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(onClose, 300); // Allow animation to complete
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isVisible ? "scale-100" : "scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
        >
          ×
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">{project.name}</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Big Image */}
          <div className="space-y-6">
            {project.image && (
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Screenshots Section */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Screenshots</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                      <img
                        src={screenshot}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details and Description */}
          <div className="space-y-6">
            {/* Project Details */}
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Project Details</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {project.details || project.description}
              </p>

              {/* Additional Info */}
              <div className="space-y-4">
                {project.repo && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">GitHub Repository:</span>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}

                {project.liveDemo && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Live Demo:</span>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                    >
                      Visit Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Description</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8 justify-end">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white rounded-lg"
            >
              View on GitHub
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white rounded-lg"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}