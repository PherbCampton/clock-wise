import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "./theme";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
