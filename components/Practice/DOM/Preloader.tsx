import { keyframes } from "@stitches/react";

import { styled } from "../../../stitches.config";

const PreloaderComponent = () => {
  return (
    <Preloader className="preload">
      <PreloaderWrapper>
        <Loading>
          <Circle />
          <Circle num="2" />
          <Circle num="3" />
        </Loading>
      </PreloaderWrapper>
    </Preloader>
  );
};

export default PreloaderComponent;

const Preloader = styled("div", {
  backgroundColor: "#E8E8E8",
  width: "100%",
  height: "100vh",
  position: "fixed",
  zIndex: 999999999999999,
  opacity: 1,
});
const PreloaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
const Loading = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const load = keyframes({
  "0%": { transform: "translateY(0)" },
  "20%": { transform: "translateY(-8px)" },
  "40%": { transform: "translateY(0)" },
});
const Circle = styled("div", {
  width: "10px",
  height: "10px",
  margin: 6,
  borderRadius: "50%",
  backgroundColor: "$pink",
  animation: `${load} 1s ease-in-out infinite`,

  variants: {
    num: {
      2: {
        animationDelay: "0.1s",
      },
      3: {
        animationDelay: "0.2s",
      },
    },
  },
});
