import { createStitches, createTheme } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      text: "#333332",
      background: "#FAF4E5",
      pink: "#e5a1aa",
      green: "#7ad0ac",
      blue: "#6F81C0",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
  media: {
    bp1: "(max-width: 520px)",
    bp2: "(max-width: 900px)",
    bp3: "(max-width: 1200px)",
    bp4: "(max-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
});

export const darkTheme = createTheme({
  colors: {
    text: "#FAF4E5",
    background: "#6F81C0",
    pink: "#FAF4E5",
    green: "#FAF4E5",
    blue: "#FAF4E5",
  },
});
