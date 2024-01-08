/* eslint-disable no-irregular-whitespace */
// import original module declarations
import "styled-components";

export enum BREAK_POINTS {
  MOBILE_VIEWPORT = "320px", // 320px  -  480px
  TABLET_VIEWPORT = "481px", // 481px  - 768px
  LAPTOP_VIEWPORT = "769px", // 769px  - 1024px
  DESKTOP_VIEWPORT = "1025px", // 1025px  —  1200px
  EXTRA_LARGE_VIEWPORT = "1201px", // 1201px and more
}

// All app colors
export enum LIGHT_MODE_COLORS {
  text = "#111729",
  background = "#f2f9fe",
  secondary_text = "#909193",
  transparent = "transparent",
}

export enum DARK_MODE_COLORS {
  text = "#FFFFFF",
  background = "#111729",
  secondary_text = "#909193",
  transparent = "transparent",
}

declare module "styled-components" {
  export interface DefaultTheme {
    // App dark mode condition
    isDarkMode: boolean;
    // Toggle App theme
    toggleTheme: () => void;
    // App break points
    breakpoints: typeof BREAK_POINTS;
    // All Global App palette typings
    palette: typeof DARK_MODE_COLORS | typeof LIGHT_MODE_COLORS;
    // App color converter
    hexToRGB: (hexColor: string, alpha?: number | undefined) => string;
    // All Global App Colors typings
    colors: { dark: typeof DARK_MODE_COLORS; light: typeof LIGHT_MODE_COLORS };
  }
}
