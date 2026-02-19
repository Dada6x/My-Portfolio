import ClickSpark from "./ClickSpark";
import FooterSection from "./FooterSection";
import { Award } from "lucide-react";

const certifications: any[] = [
  // {
  //   id: 1,
  //   name: "Cisco CCNA",
  //   icon: <Award className="w-6 h-6 text-yellow-500" />,
  //   image: "game.png",
  // },
  // {
  //   id: 2,
  //   name: "Unity Certified",
  //   icon: <Award className="w-6 h-6 text-purple-500" />,
  //   image: "game.png",
  // },
  // {
  //   id: 3,
  //   name: "Python Fundamentals",
  //   icon: <Award className="w-6 h-6 text-green-500" />,
  //   image: "game.png",
  // },
  // {
  //   id: 4,
  //   name: "SQL Basics",
  //   icon: <Award className="w-6 h-6 text-blue-500" />,
  //   image: "game.png",
  // },
];

const CertificationsPage = () => {
  return (
    <section
      id="certifications"
      className="bg-white dark:bg-black transition-colors duration-700"
    >
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto py-16 px-6 text-center">
          {/* Label like your lab page */}
          <div className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
            · 06 / certifications
          </div>

          <h2 className="text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-700">
            Learning Wall
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-700">
            My certifications and structured learning achievements.
          </p>
        </div>
        {/* COMMING SOON  */}
        <div className="max-w-7xl mx-auto p-8 md:p-12 text-center mb-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            🚧 Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4">
            this section is still under development real projects will be live
            soon!
          </p>
        </div>
        {/* Certifications List */}
        <div className="max-w-6xl mx-auto space-y-8 px-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col md:flex-row items-center border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black
                transition-all duration-700 ease-in-out"
            >
              {/* Text */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {cert.icon}
                  <h3 className="font-mono font-bold text-gray-900 dark:text-white text-2xl md:text-3xl transition-colors duration-700">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed transition-colors duration-700">
                  Earned after completing practical exercises and exams, applied
                  to real-world projects.
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 p-8 flex justify-center items-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-w-full h-auto object-contain transition-transform duration-700 "
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-12"></div>
        <FooterSection />
      </ClickSpark>
    </section>
  );
};

export default CertificationsPage;
