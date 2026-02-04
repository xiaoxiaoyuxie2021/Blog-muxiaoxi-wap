import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export function SakuraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化花瓣
    const petalCount = 25;
    const colors = ['#ffb7c5', '#ffcdd6', '#ffe4e9', '#ff9eb5', '#ffd1dc'];
    
    for (let i = 0; i < petalCount; i++) {
      petalsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 1 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate((petal.rotation * Math.PI) / 180);
      ctx.globalAlpha = petal.opacity;
      ctx.fillStyle = petal.color;
      
      // 绘制樱花花瓣形状
      ctx.beginPath();
      ctx.moveTo(0, -petal.size);
      ctx.bezierCurveTo(
        petal.size * 0.5, -petal.size * 0.5,
        petal.size * 0.5, petal.size * 0.3,
        0, petal.size
      );
      ctx.bezierCurveTo(
        -petal.size * 0.5, petal.size * 0.3,
        -petal.size * 0.5, -petal.size * 0.5,
        0, -petal.size
      );
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += Math.sin(petal.y * 0.01) * 0.5 + petal.speedX;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size;
          petal.x = Math.random() * canvas.width;
        }

        if (petal.x > canvas.width + petal.size) {
          petal.x = -petal.size;
        } else if (petal.x < -petal.size) {
          petal.x = canvas.width + petal.size;
        }

        drawPetal(petal);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="sakura-canvas"
      style={{ pointerEvents: 'none' }}
    />
  );
}
