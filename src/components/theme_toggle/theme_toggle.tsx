"use client";

import React from "react";
import { useTheme } from "styled-components";
import { usePrefersReducedMotion } from "./../../hooks";
import { useSpring, useTrail, animated } from "react-spring";
import { IconWrapper, MoonOrSun } from "./theme_toggle.styles";

type DarkModeToggleProps = {
  id?: string;
  size?: number;
  isDarkMode: boolean;
  toggleTheme: VoidFunction;
  delegated?: Record<string, any>;
};

export const ThemeToggle: React.FC<DarkModeToggleProps> = ({
  size = 18,
  isDarkMode,
  toggleTheme,
  id = "main-nav",
  ...delegated
}) => {
  const { palette } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  const toggleColorMode: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    toggleTheme();
  };

  const svgSpring = useSpring({
    transform: isDarkMode ? "rotate(40deg)" : "rotate(90deg)",
    immediate: prefersReducedMotion,
  });

  const maskSpring = useSpring({
    cy: isDarkMode ? 2 : 0,
    cx: isDarkMode ? 10 : 25,
    immediate: prefersReducedMotion,
    config: { mass: 3.1, friction: 21 },
  });

  const sunMoonSpring = useSpring({
    r: isDarkMode ? 8 : 5,
    immediate: prefersReducedMotion,
  });

  const sunDotAngles = [0, 60, 120, 180, 240, 300];

  const sunDotTrail = useTrail(sunDotAngles.length, {
    transform: isDarkMode ? 0 : 1,
    transformOrigin: "center center",
    config: { tension: 210, friction: 20 },
    immediate: isDarkMode || prefersReducedMotion,
  });

  return (
    <IconWrapper
      onClick={toggleColorMode}
      aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      {...delegated}
    >
      <MoonOrSun
        width={size}
        height={size}
        style={svgSpring}
        viewBox="0 0 18 18"
      >
        <mask id={`moon-mask-${id}`}>
          <rect x="0" y="0" width="18" height="18" fill="#FFF" />
          <animated.circle {...maskSpring} r="8" fill="black" />
        </mask>

        <animated.circle
          cx="9"
          cy="9"
          fill={palette.text}
          mask={`url(#moon-mask-${id})`}
          {...sunMoonSpring}
        />

        {/* Sun dots */}
        <g>
          {sunDotTrail.map(({ transform, ...props }, index) => {
            const angle = sunDotAngles[index];
            const centerX = 9;
            const centerY = 9;

            const angleInRads = (angle / 180) * Math.PI;

            const c = 8; // hypothenuse
            const a = centerX + c * Math.cos(angleInRads);
            const b = centerY + c * Math.sin(angleInRads);

            return (
              <animated.circle
                key={angle}
                cx={a}
                cy={b}
                r={1.5}
                fill={palette.text}
                style={{
                  ...props,
                  transform: transform.to((t) => `scale(${t})`),
                }}
              />
            );
          })}
        </g>
      </MoonOrSun>
    </IconWrapper>
  );
};
