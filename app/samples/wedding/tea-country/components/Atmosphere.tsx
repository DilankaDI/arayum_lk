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
    const particles = Array.from({ length: 7 }, (_, i) => ({
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
        const x = ((p.x * width + t * 4) % (width + 300)) - 80,
          y = height * (0.28 + p.y * 0.6);
        const size = Math.max(100, width * 0.17);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, "rgba(253,245,224,.095)");
        gradient.addColorStop(1, "rgba(253,245,224,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(x - size, y - size, size * 2, size * 2);
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
