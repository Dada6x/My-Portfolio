import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <div className="max-w-5xl w-full px-8 md:px-16">
        <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-12 animate-fade-in tracking-wider">
          · v1.0 started in 24ms
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-8 text-black dark:text-white animate-slide-up leading-tight tracking-tighter">
          Software<br />Engineer
        </h1>

        <div className="mb-12 text-lg md:text-xl text-gray-600 dark:text-gray-400 animate-slide-up-delay max-w-2xl leading-relaxed">
          <p>
            Building robust mobile applications with <code className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded font-mono text-sm">Flutter</code>,
            designing backend systems, and exploring cybersecurity and networking architecture.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 animate-slide-up-delay-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 border border-black dark:border-white"
          >
            view my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-mono text-sm border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
          >
            contact me
          </button>
        </div>

        <div className="mt-16 text-xs font-mono text-gray-500 dark:text-gray-600">
          ▯ Damascus University • Software Engineer
        </div>
      </div>
    </section>
  );
}
