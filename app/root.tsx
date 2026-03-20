import React from "react";
import { ThemeProvider } from "@rescui/ui-contexts";

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme="dark">
      {children}
    </ThemeProvider>
  );
}