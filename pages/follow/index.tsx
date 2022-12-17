import { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { keyframes, styled } from "@stitches/react";
import { useControls } from "leva";

const spin = keyframes({
  "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
  "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
});
const Cursor = styled(animated.div, {
  position: "absolute",
  width: "20px",
  height: "20px",
  border: "2px solid #000",
  boxSizing: "border-box",
  transform: "translate(-50%, -50%)",
  borderRadius: "9999px",
  pointerEvents: "none",
  transition: "0.1s",
});

const Title = styled("div", {
  fontSize: "80px",
  padding: "15px",

  [`&:hover ~ ${Cursor}`]: {
    width: "100px",
    height: "100px",
    border: "2px dashed #000",
    animation: `${spin} 5s linear infinite`,
  },
});

const Border = styled("div", {
  padding: "200px",
});

const Container = styled("div", {
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#ffffff",
  fontFamily: "sans-serif",
});

const Follow = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { color, movingSpeed } = useControls({
    color: "#ffffff",
    movingSpeed: 0.1,
  });

  const [{ x, y }, api] = useSpring(() => {
    return {
      x: 0,
      y: 0,
      config: { mass: 10, tension: 550, friction: 140 },
    };
  });

  const move = ({ clientX, clientY }) => {
    let borderTop = ref.current.offsetTop;
    let borderRight = ref.current.offsetLeft + ref.current.offsetWidth;
    let borderBottom = ref.current.offsetTop + ref.current.offsetHeight;
    let borderLeft = ref.current.offsetLeft;

    let returnX: number;
    let returnY: number;

    if (clientX < borderLeft) {
      returnX = borderLeft;
    } else if (clientX < borderRight) {
      returnX = clientX;
    } else {
      returnX = borderRight;
    }

    if (clientY < borderTop) {
      returnY = borderTop;
    } else if (clientY < borderBottom) {
      returnY = clientY;
    } else {
      returnY = borderBottom;
    }

    api.start({ x: returnX, y: returnY });
  };

  return (
    <Container onMouseMove={move}>
      <Border ref={ref}>
        <Title style={{ backgroundColor: color }}>Follow the cursor</Title>
        <Cursor
          style={{
            top: y.to((value) => `${value}px`),
            left: x.to((value) => `${value}px`),
            transition: `${movingSpeed}s`,
          }}
        />
      </Border>
    </Container>
  );
};

export default Follow;
