const FooterSection = () => {
  return (
    <div className="p-8 md:p-12 text-center border-t border-gray-200 dark:border-gray-800">
      <p className="font-mono text-xs text-gray-500 dark:text-gray-600">
        built with React, TypeScript & Tailwind CSS
      </p>
      <p className="mt-4 font-mono text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} — Yahiea Dada
      </p>
    </div>
  );
};

export default FooterSection;
