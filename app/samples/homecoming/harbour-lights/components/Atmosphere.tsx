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

    let last = 0;
    function render(ms: number) {
      if (!ctx || !canvas) return;
      frame = requestAnimationFrame(render);
      if (ms - last < 32) return;
      last = ms;
      const t = ms / 1000;
      ctx.clearRect(0, 0, width, height);
      for (let burst = 0; burst < 3; burst++) {
        const clock = t + burst * 2.8,
          cycle = Math.floor(clock / 7),
          age = clock % 7;
        if (age > 2.8) continue;
        const x = width * (0.12 + ((cycle * 37 + burst * 31) % 75) / 100),
          y = height * (0.13 + ((cycle * 7 + burst * 11) % 30) / 100);
        for (let j = 0; j < 46; j++) {
          const angle = (j / 46) * Math.PI * 2,
            radius = (1 - Math.exp(-age * 1.3)) * (34 + (j % 4) * 12);
          const dx = Math.cos(angle),
            dy = Math.sin(angle);
          ctx.strokeStyle = `rgba(${burst % 2 ? "255,199,122" : "255,220,210"},${Math.max(0, 1 - age / 2.8) * 0.85})`;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(
            x + dx * radius * 0.91,
            y + dy * radius * 0.91 + age * age * 3,
          );
          ctx.lineTo(x + dx * radius, y + dy * radius + age * age * 3);
          ctx.stroke();
        }
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
