import { styled } from "@stitches/react";

export const HeadSection = styled("section", {
  width: "100vw",
  height: "100vh",
});

export const HeadWrapper = styled("div", {
  position: "relative",
  height: "100%",
  width: "calc(100% - 160px)",
  margin: "0 auto",
  maxWidth: 1100,
});

export const Hero = styled("div", {
  position: "absolute",

  variants: {
    level: {
      main: {
        bottom: 168,
        left: 0,

        "& h1": {
          fontSize: 64,
        },
        "& p": {
          fontSize: 18,
        },
      },
      sub: {
        top: "calc(50% - 120px)",
        right: 0,

        "& h1": {
          fontSize: 32,
          textTransform: "uppercase",
        },

        "& p": {
          fontSize: 32,
          textTransform: "uppercase",
        },
      },
    },
  },
});
