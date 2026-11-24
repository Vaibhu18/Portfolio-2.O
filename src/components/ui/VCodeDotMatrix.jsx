"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * VCodeDotMatrix
 *
 * Renders the brand name "VCODE" composed of a crisp, refined dot matrix.
 * - Font sampling uses bold 700 with proportional tracking and generous counters.
 * - Multi-sample kernel thresholding eliminates anti-aliasing artifacts/stray dots.
 * - Reduced dot radius creates a modern, sleek halftone / matrix display.
 * - Ambient dots provide a subtle grid backdrop matching modern tech aesthetics.
 * - Interactive spring physics and brand purple glow on pointer hover.
 */
export default function VCodeDotMatrix() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -2000, y: -2000, isActive: false });
  const [isDark, setIsDark] = useState(false);

  // Sync theme
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Rasterize "VCODE" offscreen and generate dot matrix
  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    if (!width) return;

    // Proportional height constrained for optimal banner presentation
    const height = Math.min(Math.max(Math.round(width * 0.2), 90), 220);
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Offscreen canvas for typography rasterization
    const off = document.createElement("canvas");
    off.width = width;
    off.height = height;
    const offCtx = off.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    // Universal clean geometric sans-serif stack
    const fontFamily =
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

    const chars = ["V", "C", "O", "D", "E"];
    const trialFontSize = 100;
    offCtx.font = `700 ${trialFontSize}px ${fontFamily}`;

    const trialWidths = chars.map((ch) => offCtx.measureText(ch).width);
    const trialTracking = trialFontSize * 0.1;
    const trialTotalWidth =
      trialWidths.reduce((sum, w) => sum + w, 0) + trialTracking * (chars.length - 1);

    // Scale font size to fit both 88% width and 70% height gracefully
    const maxTextWidth = width * 0.88;
    const maxTextHeight = height * 0.7;
    const scale = Math.min(maxTextWidth / trialTotalWidth, maxTextHeight / trialFontSize);
    const fontSize = Math.floor(trialFontSize * scale);
    const tracking = fontSize * 0.1;

    offCtx.font = `700 ${fontSize}px ${fontFamily}`;
    const charWidths = chars.map((ch) => offCtx.measureText(ch).width);
    const totalTextWidth =
      charWidths.reduce((sum, w) => sum + w, 0) + tracking * (chars.length - 1);

    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillStyle = "#ffffff";

    let currentX = (width - totalTextWidth) / 2;
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      const w = charWidths[i];
      offCtx.fillText(ch, currentX + w / 2, height / 2 + height * 0.015);
      currentX += w + tracking;
    }

    const imgData = offCtx.getImageData(0, 0, width, height).data;

    // Dot grid configuration: reduced dot size with ample breathing room
    const gap = width < 480 ? 4.2 : width < 768 ? 5.0 : 6.0;
    const baseRadius = gap * 0.23; // Reduced dot size: ~1.0px (mobile) to ~1.4px (desktop)
    const ambientRadius = baseRadius * 0.55;

    const newDots = [];
    const cols = Math.floor(width / gap);
    const rows = Math.floor(height / gap);
    const offsetX = (width - cols * gap) / 2 + gap / 2;
    const offsetY = (height - rows * gap) / 2 + gap / 2;

    const sampleRadius = Math.max(1, Math.round(gap * 0.3));

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = Math.round(offsetX + c * gap);
        const y = Math.round(offsetY + r * gap);

        // 5-point cross kernel sample (center, top, bottom, left, right)
        // Eliminates single-pixel anti-aliasing artifacts (e.g. stray dots)
        let alphaSum = 0;
        let validSamples = 0;

        const centerIdx = (y * width + x) * 4 + 3;
        alphaSum += (imgData[centerIdx] || 0) * 2;
        validSamples += 2;

        const offsets = [
          [0, -sampleRadius],
          [0, sampleRadius],
          [-sampleRadius, 0],
          [sampleRadius, 0],
        ];

        for (let k = 0; k < offsets.length; k++) {
          const sx = Math.min(Math.max(0, x + offsets[k][0]), width - 1);
          const sy = Math.min(Math.max(0, y + offsets[k][1]), height - 1);
          alphaSum += imgData[(sy * width + sx) * 4 + 3] || 0;
          validSamples++;
        }

        const avgAlpha = alphaSum / validSamples;
        const isText = avgAlpha > 120; // Strict threshold for solid letterforms

        newDots.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          radius: isText ? baseRadius : ambientRadius,
          isText,
          active: 0,
        });
      }
    }

    dotsRef.current = newDots;
  }, []);

  // Resize listener
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(buildGrid, 60);
    };

    buildGrid();

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [buildGrid]);

  // High-performance animation render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const interactionRadius = 75;
      const dots = dotsRef.current;

      const restingAmbientColor = isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.06)";
      const restingTextColor = isDark
        ? "rgba(255, 255, 255, 0.95)"
        : "rgba(15, 15, 18, 0.95)";
      const hoverBrandColor = isDark ? "#a78bfa" : "#7c3aed";

      // Arrays for batched resting drawing
      const restingAmbient = [];
      const restingText = [];
      const activeDots = [];

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Interactive spring physics
        const dx = dot.ox - mouse.x;
        const dy = dot.oy - mouse.y;
        const dist = Math.hypot(dx, dy);

        let targetX = dot.ox;
        let targetY = dot.oy;

        if (mouse.isActive && dist < interactionRadius) {
          const force = (1 - dist / interactionRadius) * 10;
          const angle = Math.atan2(dy, dx);
          targetX = dot.ox + Math.cos(angle) * force;
          targetY = dot.oy + Math.sin(angle) * force;
          dot.active = Math.min(1, dot.active + 0.2);
        } else {
          dot.active = Math.max(0, dot.active - 0.035);
        }

        // Spring acceleration & velocity dampening
        const ax = (targetX - dot.x) * 0.2;
        const ay = (targetY - dot.y) * 0.2;
        dot.vx = (dot.vx + ax) * 0.72;
        dot.vy = (dot.vy + ay) * 0.72;
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.active > 0.02) {
          activeDots.push(dot);
        } else if (dot.isText) {
          restingText.push(dot);
        } else {
          restingAmbient.push(dot);
        }
      }

      // Batch 1: Resting ambient dots
      if (restingAmbient.length > 0) {
        ctx.beginPath();
        ctx.fillStyle = restingAmbientColor;
        for (let i = 0; i < restingAmbient.length; i++) {
          const d = restingAmbient[i];
          ctx.moveTo(d.x + d.radius, d.y);
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      // Batch 2: Resting text dots
      if (restingText.length > 0) {
        ctx.beginPath();
        ctx.fillStyle = restingTextColor;
        for (let i = 0; i < restingText.length; i++) {
          const d = restingText[i];
          ctx.moveTo(d.x + d.radius, d.y);
          ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      // Batch 3: Active (hovered) dots with brand glow
      for (let i = 0; i < activeDots.length; i++) {
        const dot = activeDots[i];
        const currentRadius = dot.radius * (1 + dot.active * 0.35);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = hoverBrandColor;
        ctx.shadowColor = hoverBrandColor;
        ctx.shadowBlur = dot.active * 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  const handlePointerMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isActive: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current = { x: -2000, y: -2000, isActive: false };
  };

  const handleTouchMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !e.touches[0]) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
      isActive: true,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-hidden py-3 sm:py-5"
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handlePointerLeave}
        className="cursor-crosshair select-none touch-none"
        aria-hidden="true"
      />
      <span className="sr-only">VCODE</span>
    </div>
  );
}
