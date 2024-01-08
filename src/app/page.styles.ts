"use client";

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 5px 0;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text};
`;
