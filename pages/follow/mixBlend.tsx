import { useRef } from "react";
import { animated, useSpring } from "react-spring";
import { styled } from "@stitches/react";

// The mix-blend-mode CSS property sets how an element's content should
// blend with the content of the element's parent and the element's background.

const Cursor = styled(animated.div, {
  position: "absolute",
  width: "300px",
  height: "300px",
  background:
    "radial-gradient(46.23% 46.23% at 50% 53.77%, rgba(104, 154, 202, 0.6) 0%, rgba(104, 154, 202, 0) 100%)",
  transform: "translate(-50%, -50%)",
  borderRadius: "9999px",
  pointerEvents: "none",
  transition: "0.1s",
  opacity: 1,
});
const Cursor2 = styled(animated.div, {
  position: "absolute",
  width: "450px",
  height: "450px",
  background:
    "radial-gradient(46.23% 46.23% at 50% 53.77%, rgb(27, 74, 124) 0%, rgba(27, 74, 124, 0) 100%)",
  transform: "translate(-50%, -50%)",
  borderRadius: "9999px",
  pointerEvents: "none",
  transition: "0.15s",
  opacity: 1,
});

const Title = styled("div", {
  fontSize: "80px",
  padding: "15px",
  mixBlendMode: "difference",
  color: "#fff",
});

const Border = styled("div", {
  padding: "200px",
});

const Container = styled("div", {
  position: "relative",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#EDEEF0",
  fontFamily: "sans-serif",
});

const Follow = () => {
  const ref = useRef<HTMLDivElement>(null);

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
        <Cursor
          style={{
            top: y.to((value) => `${value}px`),
            left: x.to((value) => `${value}px`),
          }}
        />
        <Cursor2
          style={{
            top: y.to((value) => `${value}px`),
            left: x.to((value) => `${value}px`),
          }}
        />
        {/*要記得是放在下一層*/}
        <Title>
          <h1>Mix Blend Mode: Difference</h1>
        </Title>
      </Border>
    </Container>
  );
};

export default Follow;
