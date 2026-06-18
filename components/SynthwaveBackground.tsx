"use client";

import { useEffect, useRef } from "react";

interface ProjectedPoint {
  x: number;
  y: number;
  depth: number;
}

/** Animated synthwave wireframe terrain — camera flies forward through the grid */
export default function SynthwaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;
    let scrollOffset = 0;
    let lastFrameTime = 0;
    let frameCount = 0;
    let isRunning = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const deviceMemory = (navigator as any).deviceMemory || 4;
    const hwConcurrency = navigator.hardwareConcurrency || 4;
    const perfTier =
      deviceMemory <= 2 || hwConcurrency <= 2
        ? "low"
        : deviceMemory <= 4 || hwConcurrency <= 4
        ? "medium"
        : "high";
    let targetFPS = prefersReducedMotion
      ? 8
      : perfTier === "high"
      ? 30
      : perfTier === "medium"
      ? 20
      : 12;
    const bufferCanvas = document.createElement("canvas");
    const bufferCtx = bufferCanvas.getContext("2d");
    const stars: { x: number; y: number; size: number; alpha: number }[] = [];
    let glowGradient: CanvasGradient | null = null;
    let bottomFogGradient: CanvasGradient | null = null;
    let resizeTimer: number | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rebuild stars once per resize (not every frame)
      stars.length = 0;
      const count = Math.max(20, Math.floor((width * height) / 3500));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.55,
          size: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.6 + 0.15,
        });
      }

      // Cache gradients for current size to avoid creating them each frame
      glowGradient = ctx.createRadialGradient(
        width / 2,
        height * 0.42,
        0,
        width / 2,
        height * 0.42,
        width * 0.7
      );
      glowGradient.addColorStop(0, "rgba(168, 85, 247, 0.18)");
      glowGradient.addColorStop(0.4, "rgba(139, 92, 246, 0.08)");
      glowGradient.addColorStop(1, "transparent");

      bottomFogGradient = ctx.createLinearGradient(0, height * 0.55, 0, height);
      bottomFogGradient.addColorStop(0, "transparent");
      bottomFogGradient.addColorStop(0.5, "rgba(10, 0, 16, 0.4)");
      bottomFogGradient.addColorStop(1, "rgba(5, 0, 10, 0.95)");
    };

    /** Multi-layer sine waves for undulating mountain terrain */
    const terrainHeight = (x: number, z: number, t: number): number => {
      return (
        Math.sin(x * 0.008 + z * 0.01 + t * 0.15) * 25 +
        Math.sin(x * 0.015 + z * 0.005 + t * 0.1) * 12 +
        Math.cos(x * 0.005 + z * 0.018) * 8
      );
    };

    /** Perspective projection — low angle looking toward horizon */
    const project = (
      x: number,
      y: number,
      z: number,
      width: number,
      height: number
    ): ProjectedPoint | null => {
      const focalLength = 420;
      const cameraY = -120;
      const cameraZ = 0;
      const horizonY = height * 0.42;

      // No cursor-based parallax — keep offsets zero
      const mouseOffsetX = 0;
      const mouseOffsetY = 0;

      const dz = z - cameraZ;
      if (dz <= 10) return null;

      const scale = focalLength / dz;
      return {
        x: width / 2 + (x - mouseOffsetX) * scale,
        y: horizonY + (y - cameraY - mouseOffsetY) * scale,
        depth: dz,
      };
    };

    const draw = (now: number) => {
      if (!isRunning) return;

      // Throttle frame rate
      if (targetFPS > 0) {
        if (!lastFrameTime) lastFrameTime = now;
        const delta = now - lastFrameTime;
        const minDelta = 1000 / targetFPS;
        if (delta < minDelta) {
          animationId = requestAnimationFrame(draw);
          return;
        }
        lastFrameTime = now;
      }

      frameCount++;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Draw starfield (twinkle)
      for (const star of stars) {
        const twinkle =
          star.alpha * (0.6 + 0.4 * Math.sin(time * 1.5 + star.x * 0.01 + star.y * 0.01));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();
      }

      // Horizon purple glow / fog (cached gradients)
      if (glowGradient) {
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Adaptive spacing/rows/cols to reduce work on large canvases
      const spacing = width > 1200 ? 65 : width > 800 ? 55 : 45;
      const rows = Math.min(45, Math.max(18, Math.floor(height / spacing) + 6));
      const cols = Math.ceil(width / spacing) * 2 + 12;
      const halfCols = Math.floor(cols / 2);

      if (!prefersReducedMotion) {
        scrollOffset += 0.7;
        if (scrollOffset >= spacing) scrollOffset -= spacing;
        time += 0.004;
      }

      // Wireframe drawing
      for (let row = rows; row >= 0; row--) {
        const z = row * spacing + scrollOffset;
        const rowPoints: (ProjectedPoint | null)[] = [];

        for (let col = -halfCols; col <= halfCols; col++) {
          const x = col * spacing;
          const y = -terrainHeight(x, z, time);
          rowPoints.push(project(x, y, z, width, height));
        }

        for (let col = 0; col < rowPoints.length - 1; col++) {
          const p1 = rowPoints[col];
          const p2 = rowPoints[col + 1];
          if (!p1 || !p2) continue;
          if (p1.y > height + 50 || p2.y > height + 50) continue;

          const depthFactor = 1 - Math.min(p1.depth / (rows * spacing), 1);
          const alpha = 0.15 + depthFactor * 0.85;
          const lineWidth = 0.5 + depthFactor * 1.5;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(192, 38, 211, ${alpha})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();

          if (depthFactor > 0.5) {
            ctx.strokeStyle = `rgba(217, 70, 239, ${alpha * 0.25})`;
            ctx.lineWidth = lineWidth + 2;
            ctx.stroke();
          }
        }

        if (row < rows) {
          const nextZ = (row + 1) * spacing + scrollOffset;

          for (let col = -halfCols; col <= halfCols; col += 1) {
            const x = col * spacing;
            const y1 = -terrainHeight(x, z, time);
            const y2 = -terrainHeight(x, nextZ, time);
            const p1 = project(x, y1, z, width, height);
            const p2 = project(x, y2, nextZ, width, height);
            if (!p1 || !p2) continue;
            if (p1.y > height + 50 && p2.y > height + 50) continue;

            const depthFactor = 1 - Math.min(p1.depth / (rows * spacing), 1);
            const alpha = 0.1 + depthFactor * 0.75;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.5 + depthFactor * 1.2;
            ctx.stroke();
          }
        }
      }

      // Bottom purple fog fade (cached)
      if (bottomFogGradient) {
        ctx.fillStyle = bottomFogGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Subtle film grain less frequently and with fewer dots
      if (frameCount % 3 === 0) {
        ctx.globalAlpha = 0.04;
        for (let i = 0; i < 60; i++) {
          const gx = Math.random() * width;
          const gy = Math.random() * height;
          ctx.fillStyle = Math.random() > 0.5 ? "#fff" : "#c026d3";
          ctx.fillRect(gx, gy, 1, 1);
        }
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Visibility handling: pause when canvas offscreen or tab hidden
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isRunning = entry.isIntersecting;
          if (isRunning) {
            lastFrameTime = 0;
            animationId = requestAnimationFrame(draw);
          } else {
            cancelAnimationFrame(animationId);
          }
        });
      },
      { threshold: 0.05 }
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationId);
      } else {
        isRunning = true;
        lastFrameTime = 0;
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    // start animation only if not prefers-reduced-motion
    if (!prefersReducedMotion) animationId = requestAnimationFrame(draw);

    if (canvas) observer.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
