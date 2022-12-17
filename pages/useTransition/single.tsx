import { styled } from "@stitches/react";
import { useState } from "react";
import { animated, useTransition } from "react-spring";

const Single = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <App>
      <Button
        onClick={() => {
          setIsVisible((value) => !value);
        }}
      >
        {isVisible ? "un-mount" : "mount"}
      </Button>
      <Container>
        {transition((style, item) => (item ? <Item style={style} /> : ""))}
      </Container>
    </App>
  );
};

export default Single;

const App = styled("div", {
  backgroundColor: "#C72C41",
  textAlign: "center",
  padding: 40,
  height: "100vh",
});

const Container = styled("div", {
  padding: 40,
  marginTop: 200,
  minHeight: 200,
});

const Button = styled("button", {
  padding: 8,
  backgroundColor: "white",
  borderRadius: 5,

  "&:hover": {
    backgroundColor: "gray",
  },
});

const Item = styled(animated.div, {
  width: 100,
  height: 100,
  margin: "0 auto",
  backgroundColor: "white",
  borderRadius: 8,
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
});
