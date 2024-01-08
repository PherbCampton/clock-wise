"use client";

import { animated } from "react-spring";
import styled from "styled-components";

export const Btn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  display: block;
  cursor: pointer;
  text-align: left;
  background: transparent;

  &:focus {
    outline-offset: 2px;
    outline: 2px auto ${(p) => p.theme.palette.text};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const Button = styled(Btn)`
  width: 40px;
  height: 32px;
  opacity: 0.7;
  display: flex;
  position: relative;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1044px) {
    &:hover {
      opacity: 1;
    }
  }

  svg,
  path,
  .moon-sun {
    color: ${(p) => p.theme.palette.text};
  }
`;

export const IconWrapper = styled(Button)`
  width: 40px;
  height: 32px;
  opacity: 0.7;
  display: flex;
  position: relative;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.breakpoints.LAPTOP_VIEWPORT}) {
    &:hover {
      opacity: 1;
    }
  }
`;

export const MoonOrSun = styled(animated.svg)`
  overflow: visible;
  position: relative;
`;
