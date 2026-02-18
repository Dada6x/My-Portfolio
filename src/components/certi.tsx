import { Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "Cisco CCNA",
    icon: <Award className="w-5 h-5" />,
    image: "/images/cisco-badge.png",
  },
  {
    id: 2,
    name: "Unity Certified",
    icon: <Award className="w-5 h-5" />,
    image: "/images/unity-badge.png",
  },
  {
    id: 3,
    name: "Python Fundamentals",
    icon: <Award className="w-5 h-5" />,
    image: "/images/python-badge.png",
  },
  {
    id: 4,
    name: "SQL Basics ",
    icon: <Award className="w-5 h-5" />,
    image: "/images/python-badge.png",
  },
];

const CertificationsPage = () => {
  return (
    <div>
      {/* Certifications / Learning Wall */}
      <div>
        <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
          Learning Wall
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-24 h-24 mb-4 object-contain"
              />
              <div className="flex items-center gap-2">
                {cert.icon}
                <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                  {cert.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
