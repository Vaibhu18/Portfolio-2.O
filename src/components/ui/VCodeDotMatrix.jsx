"use client";

import { useRef, useState } from "react";

/**
 * VCodeOutlineBanner
 *
 * Minimalist outlined typographic wordmark:
 * - Massive heavy geometric sans-serif "VCODE" rendered as a crisp vector outline.
 * - Increased stroke opacity in light/white mode for clear visibility and contrast.
 * - Bottom border removed so the letters transition cleanly into the copyright section.
 * - Cursor-tracking radial spotlight reveals a subtle brand purple stroke glow on hover.
 */
export default function VCodeOutlineBanner() {
  const svgRef = useRef(null);
  const gradientRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const VIEWBOX_WIDTH = 1200;
  const VIEWBOX_HEIGHT = 250;
  const TEXT_BASELINE_Y = 232;

  const updatePointer = (clientX, clientY) => {
    const svg = svgRef.current;
    const gradient = gradientRef.current;
    if (!svg || !gradient) return;

    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * VIEWBOX_WIDTH;
    const y = ((clientY - rect.top) / rect.height) * VIEWBOX_HEIGHT;

    gradient.setAttribute("cx", x.toFixed(1));
    gradient.setAttribute("cy", y.toFixed(1));
  };

  const handlePointerMove = (e) => {
    if (!isHovered) setIsHovered(true);
    updatePointer(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    if (!isHovered) setIsHovered(true);
    updatePointer(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden border-t border-black/10 bg-transparent pt-6 sm:pt-10 md:pt-12 pb-0 dark:border-white/[0.08] [--vcode-stroke:rgba(15,15,18,0.52)] dark:[--vcode-stroke:rgba(255,255,255,0.22)] [--vcode-glow:#7048c8] dark:[--vcode-glow:#b8a1f0]"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerLeave}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMidYMax meet"
        className="block w-full h-auto select-none cursor-default touch-none"
        aria-hidden="true"
      >
        <defs>
          {/* Cursor-following radial gradient for interactive stroke illumination */}
          <radialGradient
            ref={gradientRef}
            id="vcode-hover-glow"
            gradientUnits="userSpaceOnUse"
            cx={VIEWBOX_WIDTH / 2}
            cy={VIEWBOX_HEIGHT / 2}
            r="280"
          >
            <stop offset="0%" stopColor="var(--vcode-glow)" stopOpacity="1" />
            <stop offset="45%" stopColor="var(--vcode-glow)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--vcode-glow)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base hairline outline with increased contrast in white mode */}
        <text
          x="50%"
          y={TEXT_BASELINE_Y}
          textAnchor="middle"
          fill="transparent"
          stroke="var(--vcode-stroke)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 900,
            fontSize: "295px",
            letterSpacing: "0.02em",
          }}
        >
          VCODE
        </text>

        {/* Interactive purple outline highlight on hover/touch */}
        <text
          x="50%"
          y={TEXT_BASELINE_Y}
          textAnchor="middle"
          fill="transparent"
          stroke="url(#vcode-hover-glow)"
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
          className="transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 900,
            fontSize: "295px",
            letterSpacing: "0.02em",
          }}
        >
          VCODE
        </text>
      </svg>

      <span className="sr-only">VCODE</span>
    </div>
  );
}
