import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-black transition-colors duration-500 "
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
          <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
              · 03 / contact
            </div>
            <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Let's collaborate on something great. Reach out through any of
              these channels.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="block p-4 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-600">
                    Email
                  </span>
                </div>
                <div className="text-sm text-black dark:text-white font-semibold">
                  your.email@example.com
                </div>
              </a>

              <a
                href="https://github.com/dada6x"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-600">
                    GitHub
                  </span>
                </div>
                <div className="text-sm text-black dark:text-white font-semibold">
                  Dada6x
                </div>
              </a>

              <a
                href="https://linkedin.com/in/yahea-dada-b03682370/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Linkedin className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  <span className="font-mono text-xs text-gray-500 dark:text-gray-600">
                    LinkedIn
                  </span>
                </div>
                <div className="text-sm text-black dark:text-white font-semibold">
                  @YaheaDada
                </div>
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
              · send a message
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-gray-500 dark:text-gray-600 mb-2 tracking-wider"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm focus:outline-none hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-gray-500 dark:text-gray-600 mb-2 tracking-wider"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm focus:outline-none hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                  placeholder="yahieadada@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-gray-500 dark:text-gray-600 mb-2 tracking-wider"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm focus:outline-none hover:border-gray-400 dark:hover:border-gray-600 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-4 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "sending..."
                ) : status === "sent" ? (
                  "sent!"
                ) : (
                  <>
                    send message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="font-mono text-xs text-gray-500 dark:text-gray-600 tracking-wider">
          built with React, TypeScript & Tailwind CSS
        </p>
        <p className="mt-4 font-mono text-xs text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} — Yahiea Dada
        </p>
      </div>
    </section>
  );
}
