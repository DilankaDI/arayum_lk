"use client";

import { createContext, useContext, useEffect, useRef } from "react";

export const MotionPreference = createContext(false);
export default function Atmosphere() {
  const paused = useContext(MotionPreference);
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || paused) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0,
      height = 0,
      visible = true;
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const scale = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };
    const particles = Array.from({ length: 23 }, (_, i) => ({
      x: ((i * 137 + 19) % 997) / 997,
      y: ((i * 223 + 87) % 1009) / 1009,
      size: 1.3 + (i % 6) * 0.85,
      phase: i * 2.39996,
      speed: 7 + (i % 8) * 1.4,
    }));
    let last = 0;
    function render(ms: number) {
      if (!ctx || !canvas) return;
      frame = requestAnimationFrame(render);
      if (ms - last < 32) return;
      last = ms;
      const t = ms / 1000;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        const x = p.x * width + Math.sin(t * 0.52 + p.phase) * 38;
        const y = ((p.y * height + t * p.speed) % (height + 32)) - 16;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.sin(t * 0.7 + p.phase) + p.phase);
        ctx.scale(0.4 + 0.6 * Math.abs(Math.cos(t * 0.55 + p.phase)), 1);
        ctx.fillStyle = ["#cb753ecc", "#dfad60cc", "#ab512bbf"][
          Math.floor(p.speed) % 3
        ];
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(
          p.size * 1.5,
          -p.size * 0.3,
          p.size,
          p.size,
          0,
          p.size * 1.6,
        );
        ctx.bezierCurveTo(
          -p.size,
          p.size,
          -p.size * 0.8,
          -p.size * 0.6,
          0,
          -p.size,
        );
        ctx.fill();
        ctx.restore();
      }
    }
    function sync() {
      cancelAnimationFrame(frame);
      ctx?.clearRect(0, 0, width, height);
      if (visible && !document.hidden && !reduced.matches)
        frame = requestAnimationFrame(render);
    }
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      sync();
    });
    const dimensions = new ResizeObserver(resize);
    resize();
    dimensions.observe(canvas);
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      dimensions.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
      ctx.clearRect(0, 0, width, height);
    };
  }, [paused]);
  return <canvas className="atmosphere" ref={ref} aria-hidden="true" />;
}
