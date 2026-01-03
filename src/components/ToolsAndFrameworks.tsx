import LogoLoop from "./LogoLoop";

interface ToolsAndFrameworksProps {
  logos: any[];
}

export function ToolsAndFrameworks({ logos }: ToolsAndFrameworksProps) {
  return (
    <section
      aria-label="Tools and frameworks I use"
      className="mx-auto max-w-7xl  border-gray-200 dark:border-gray-800 border-l border-r"
    >
      {/* Heading */}
      <div className="pl-8 md:p-12 text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 tracking-wider">
        ·  03 / Tools & frameworks I use
      </div>

      <div className="h-[200px] flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
        <LogoLoop
          className="text-xs"
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={70}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Skills & technologies"
        />
      </div>
    </section>
  );
}
