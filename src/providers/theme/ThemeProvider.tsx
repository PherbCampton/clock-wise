"use client";

import { FC, PropsWithChildren, useMemo } from "react";
import { useDarkMode } from "usehooks-ts";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import GlobalStyle from "./reset";
import { hexToRGB } from "../../helpers";
import { BREAK_POINTS, DARK_MODE_COLORS, LIGHT_MODE_COLORS } from "./style";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkMode, toggle: toggleTheme } = useDarkMode();

  const theme: DefaultTheme = useMemo(
    () => ({
      hexToRGB,
      isDarkMode,
      toggleTheme,
      breakpoints: BREAK_POINTS,
      palette: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
      colors: { dark: DARK_MODE_COLORS, light: LIGHT_MODE_COLORS },
    }),
    [isDarkMode, toggleTheme]
  );

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
