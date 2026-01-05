import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ClickSpark from "./ClickSpark";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  // EmailJS environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = async (e: FormEvent) => {
    console.log(SERVICE_ID);
    
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-black transition-colors duration-500 border-gray-200 dark:border-gray-800 border-t"
    >
      <ClickSpark sparkSize={10} sparkRadius={20} sparkCount={10} duration={400}>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

        <div className="max-w-7xl mx-auto border-gray-200 dark:border-gray-800 border-l border-r">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* LEFT */}
            <div className="p-8 md:p-12 border-r border-gray-200 dark:border-gray-800">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · 04 / contact
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
                  href="mailto:yahieadada@gmail.com"
                  className="block p-4 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-600">
                      Email
                    </span>
                  </div>
                  <div className="text-sm text-black dark:text-white font-semibold">
                    yahieadada@gmail.com
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

            {/* RIGHT */}
            <div className="p-8 md:p-12">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · send a message
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-sm"
                />

                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-sm"
                />

                <textarea
                  rows={4}
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-sm resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 bg-black dark:bg-white text-white dark:text-black font-mono text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending"
                    ? "sending..."
                    : status === "sent"
                    ? "sent!"
                    : status === "error"
                    ? "failed"
                    : (
                      <>
                        send message <Send className="w-4 h-4" />
                      </>
                    )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="font-mono text-xs text-gray-500 dark:text-gray-600">
            built with React, TypeScript & Tailwind CSS
          </p>
          <p className="mt-4 font-mono text-xs text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} — Yahiea Dada
          </p>
        </div>
      </ClickSpark>
    </section>
  );
}
