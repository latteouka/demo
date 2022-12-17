import { styled } from "@stitches/react";

export const App = styled("div", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

export const Wrapper = styled("div", {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
});

export const DOM = styled("div", {
  zIndex: 99999,
  width: "100%",
  height: "100vh",
});

export const DOMWrapper = styled("div", {
  position: "relative",
});

export const Margin = styled("div", {
  height: "4000px",
  width: "100%",
});
