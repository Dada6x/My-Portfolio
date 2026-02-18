import ClickSpark from "./ClickSpark";
import { Cpu, Gamepad, Terminal, Github } from "lucide-react";
import FooterSection from "./footer";

type Media = { type: "image" | "diagram" | "gif"; src: string; alt: string };

type Experiment = {
  id: number;
  title: string;
  description: string;
  category: string;
  media: Media[];
  link?: string;
  icon: JSX.Element;
};

export function Lab() {
  const experiments: Experiment[] = [
    {
      id: 1,
      title: "Raspberry Pi Weather Station",
      description:
        "Monitoring temperature & humidity in my room with a Raspberry Pi. Multiple sensors and a mini-dashboard for live updates.",
      category: "Raspberry Pi",
      icon: <Cpu className="w-6 h-6" />,
      media: [
        {
          type: "image",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYQs3ItFKGqBrzhzAOWpz_7_2hy-qXtLQrg&s",
          alt: "Raspberry Pi Setup",
        },
        {
          type: "diagram",
          src: "https://www.bgr.com/img/gallery/8-best-raspberry-pi-projects-for-beginners/l-intro-1763025830.jpg",
          alt: "Circuit Diagram",
        },
      ],
    },
    {
      id: 2,
      title: "Unity Mini Game",
      description:
        "Prototype 2D platformer using Unity. Testing physics interactions and basic AI behavior.",
      category: "Unity",
      icon: <Gamepad className="w-6 h-6" />,
      media: [
        { type: "gif", src: "/game.png", alt: "Gameplay Preview" },
        {
          type: "gif",
          src: "https://camo.githubusercontent.com/faeefc761132e4d9803b4120dabad9294d33752801ba579a7339706e6e7a11cf/68747470733a2f2f636f64652e76697375616c73747564696f2e636f6d2f6173736574732f646f63732f6f746865722f756e6974792f756e6974792d6f766572766965772e706e67",
          alt: "Gameplay Preview",
        },
      ],
    },
    {
      id: 3,
      title: "Cisco Packet Tracer Lab",
      description:
        "Simulated a small office network with routers, switches, and VLAN segmentation.",
      category: "Networking",
      icon: <Terminal className="w-6 h-6" />,
      media: [
        {
          type: "diagram",
          src: "https://www.manageengine.com/network-monitoring/tech-topics/images/network-diagram-example3.png",
          alt: "Network Diagram",
        },
      ],
    },
    {
      id: 4,
      title: "Rive Animation Test",
      description:
        "Interactive animations for portfolio UI. Testing triggers and state machines.",
      category: "Animation",
      icon: <Github className="w-6 h-6" />,
      media: [
        {
          type: "gif",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgspidqX7_r7WlSmFCvmecum7xQbr6tJoHw&s",
          alt: "Rive Animation Preview",
        },
        {
          type: "gif",
          src: "/images/rive-demo.gif",
          alt: "Rive Animation Preview",
        },
      ],
    },
  ];

  return (
    <section
      id="lab"
      className="relative bg-white dark:bg-black transition-colors duration-500 border-gray-200 dark:border-gray-800 "
    >
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        {/* Side Squares / Pattern */}
        <div className="absolute inset-y-0 left-0 w-px bg-gray-200 dark:bg-gray-800" />
        <div className="absolute inset-y-0 right-0 w-px bg-gray-200 dark:bg-gray-800" />

        {/* Header Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 border-gray-200 dark:border-gray-800">
            <div className="p-8 md:p-12">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
                · 05 / lab
              </div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                Lab
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Welcome to my sandbox — a space to share experiments,
                prototypes, and tinkering with code, hardware, and animations.
              </p>
            </div>
          </div>
        </div>

        {/* Experiments List */}
        {experiments.map((exp) => (
          <ClickSpark
            key={exp.id}
            sparkSize={10}
            sparkRadius={20}
            sparkCount={10}
            duration={400}
          >
            <div className="relative group">
{/* Full-width horizontal border */}
<div className="absolute top-0 left-0 w-screen h-px bg-gray-200 dark:bg-gray-800 transition-colors duration-500" />


              {/* Card content */}
              <div
                className={`max-w-7xl mx-auto p-8 md:p-12 md:border-l md:border-r border-gray-200 dark:border-gray-800  relative transition-colors duration-500`}
              >
                {/* Category + Icon */}
                <div className="flex items-center gap-3 mb-4 text-gray-700 dark:text-gray-300">
                  {exp.icon}
                  <span className="font-mono text-xs">{exp.category}</span>
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                  {exp.media.map((m, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-500"
                    >
                      <img
                        loading="lazy"
                        src={m.src}
                        alt={m.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Link */}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </ClickSpark>
        ))}

        <FooterSection />
      </ClickSpark>
    </section>
  );
}
