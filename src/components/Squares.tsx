import React, { useRef, useEffect } from "react";

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  squareSize?: number;
}

const LIGHT_BORDER = "#e5e7eb"; // gray-200
const DARK_BORDER = "#e5e7eb";  // gray-800

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

    const getBorderColor = () => {
      return document.documentElement.classList.contains("dark")
        ? DARK_BORDER
        : LIGHT_BORDER;
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize);
      numSquaresY.current = Math.ceil(canvas.height / squareSize);
      drawGrid();
    };

    const getRainbowColor = (x: number, y: number) => {
      const hue =
        ((x + y) / (numSquaresX.current + numSquaresY.current)) * 360;
      return `hsl(${hue}, 80%, 55%)`;
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
            ctx.fillStyle = getRainbowColor(x, y);
            ctx.fillRect(px, py, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(px, py, squareSize, squareSize);
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

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

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
      drawGrid();
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [squareSize]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default Squares;
