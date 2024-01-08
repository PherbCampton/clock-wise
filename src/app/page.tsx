"use client";

import { Container } from "./page.styles";
import { useTheme } from "styled-components";
import { ThemeToggle } from "../components/theme_toggle/";

export default function Home() {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <Container>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Container>
  );
}
