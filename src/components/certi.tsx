import FooterSection from "./footer";
import { Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "Cisco CCNA",
    icon: <Award className="w-5 h-5 text-yellow-500" />,
    image: "/images/cisco-badge.png",
  },
  {
    id: 2,
    name: "Unity Certified",
    icon: <Award className="w-5 h-5 text-purple-500" />,
    image: "/images/unity-badge.png",
  },
  {
    id: 3,
    name: "Python Fundamentals",
    icon: <Award className="w-5 h-5 text-green-500" />,
    image: "/images/python-badge.png",
  },
  {
    id: 4,
    name: "SQL Basics",
    icon: <Award className="w-5 h-5 text-blue-500" />,
    image: "/images/sql-badge.png",
  },
];

const CertificationsPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-0 py-16 space-y-12">
      <header className="text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-2">
          🏆 Learning Wall
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          My certifications and structured learning achievements.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center bg-white dark:bg-black shadow-sm hover:shadow-xl transition-shadow transform hover:-translate-y-1"
          >
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

            {/* Badge Image */}
            <img
              src={cert.image}
              alt={cert.name}
              className="w-24 h-24 mb-4 object-contain"
            />

            {/* Name and Icon */}
            <div className="flex items-center gap-2">
              {cert.icon}
              <span className="font-mono font-semibold text-gray-800 dark:text-gray-200 text-lg">
                {cert.name}
              </span>
            </div>

            {/* Optional Hover Description */}
            <p className="mt-3 text-center text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              Earned after completing practical exercises and exams, applied to
              real-world projects.
            </p>
          </div>
        ))}
        <FooterSection />
      </div>
    </main>
  );
};

export default CertificationsPage;
