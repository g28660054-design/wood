import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 30;
const BALL_RADIUS = 8;

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

function lerpColor(startH: number, startS: number, startL: number, endH: number, endS: number, endL: number, t: number): string {
  const h = startH + (endH - startH) * t;
  const s = startS + (endS - startS) * t;
  const l = startL + (endL - startL) * t;
  const [r, g, b] = hslToRgb(h, s, l);
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function TrailCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    trailRef.current = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      trail[0].x += (mouseRef.current.x - trail[0].x) * 0.5;
      trail[0].y += (mouseRef.current.y - trail[0].y) * 0.5;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.05;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.05;
      }

      for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
        const t = i / TRAIL_LENGTH;
        const color = lerpColor(30, 60, 55, 45, 70, 60, t);
        const radius = BALL_RADIUS * (1 - t * 0.5);

        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
        ctx.shadowColor = 'rgba(0,0,0,0.15)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  );
}
