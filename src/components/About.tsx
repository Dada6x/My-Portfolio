export function About() {
  return (
    <section id="about" className="relative bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800 border-b md:border-b-0">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
              · 02 / about.md
            </div>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a <span className="text-black dark:text-white font-semibold">Software Engineer</span> at Damascus University ,
                passionate about building robust applications and exploring the depths of technology.
              </p>
              <p>
                Beyond my professional work, I'm an indie game developer using Unity,
                where I bring creative ideas to life through interactive experiences.
              </p>
              <p>
                My technical interests span across multiple domains, with a particular focus on
                <span className="text-black dark:text-white font-semibold"> cybersecurity</span> and
                <span className="text-black dark:text-white font-semibold"> networking</span>.
                I believe in understanding systems at their core to build better, more secure solutions.
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

        <div className="p-8 md:p-12 border-t border-gray-200 dark:border-gray-800">
          <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-4 tracking-wider">
            · knowledge sharing
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            I maintain an <span className="text-black dark:text-white font-semibold">Obsidian knowledge base</span> where I document and share
            everything I learn about software engineering, creating a living library of insights, best practices, and architectural patterns.
          </p>
        </div>
      </div>
    </section>
  );
}
