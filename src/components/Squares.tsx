import React, { useRef, useEffect } from "react";

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  squareSize?: number;
}

const LIGHT_BORDER = "#e5e7eb"; // gray-200
const DARK_BORDER = "#1f2937"; // gray-800

/* Curated hover color palette */
const HOVER_COLORS = [
  "#22c55e", // green-500
  "#3b82f6", // blue-500
  "#a855f7", // purple-500
  "#ec4899", // pink-500
  "#23aaf2",
  "#1c1c1c",
  "#f97316", // orange-500
];

const Squares: React.FC<SquaresProps> = ({ squareSize = 40 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const hoveredSquareRef = useRef<GridOffset | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ---------- helpers ---------- */

    const getBorderColor = () =>
      document.documentElement.classList.contains("dark")
        ? DARK_BORDER
        : LIGHT_BORDER;

    const getPaletteColor = (x: number, y: number) => {
      const index = (x * 31 + y * 17) % HOVER_COLORS.length;
      return HOVER_COLORS[index];
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize);
      numSquaresY.current = Math.ceil(canvas.height / squareSize);
      drawGrid();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const borderColor = getBorderColor();

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const px = x * squareSize;
          const py = y * squareSize;

          if (
            hoveredSquareRef.current &&
            hoveredSquareRef.current.x === x &&
            hoveredSquareRef.current.y === y
          ) {
            ctx.fillStyle = getPaletteColor(x, y);
            ctx.fillRect(px, py, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(px, py, squareSize, squareSize);
        }
      }
    };

    /* ---------- mouse tracking (GLOBAL, click-safe) ---------- */

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (
        mouseX < 0 ||
        mouseY < 0 ||
        mouseX > rect.width ||
        mouseY > rect.height
      ) {
        if (hoveredSquareRef.current) {
          hoveredSquareRef.current = null;
          drawGrid();
        }
        return;
      }

      const x = Math.floor(mouseX / squareSize);
      const y = Math.floor(mouseY / squareSize);

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== x ||
        hoveredSquareRef.current.y !== y
      ) {
        hoveredSquareRef.current = { x, y };
        drawGrid();
      }
    };

    /* ---------- theme observer ---------- */

    const observer = new MutationObserver(drawGrid);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none "
    />
  );
};

export default Squares;
