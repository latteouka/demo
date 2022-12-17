import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import { styled } from "@stitches/react";

interface StrikeProps {
  size?: number;
  weight?: number;
  duration?: number;
}

const StrikeTroughtText = ({
  size = 20,
  weight = 5,
  duration = 200,
}: StrikeProps) => {
  const [did, setDid] = useState(false);
  const [styles, api] = useSpring(() => ({
    from: did ? { width: 100 } : { width: 0 },
    config: { duration },
  }));

  return (
    <Container
      onClick={() => {
        setDid(() => !did);
        return api.start({
          to: did ? { width: 0 } : { width: 100 },
        });
      }}
    >
      <Text style={{ fontSize: `${size}px` }}>
        striker through
        {/* 如果要在children使用useSpring hook產出的props，就要放在animated.x的Node底下 */}
        <Progress>
          {styles.width.to((value) => ` [width: ${value.toFixed(0)}%]`)}
        </Progress>
      </Text>
      <Strike
        style={{
          width: styles.width.to((value) => `${value}%`),
          height: `${weight}px`,
        }}
      />
    </Container>
  );
};

const App = () => {
  return (
    <Body>
      <StrikeTroughtText weight={5} size={60} duration={200} />
    </Body>
  );
};

export default App;

const Body = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

const Container = styled("div", {
  position: "relative",
  display: "inline-block",
});

const Text = styled("p", {});
const Progress = styled(animated.span, {});

const Strike = styled(animated.div, {
  position: "absolute",
  top: "50%",
  right: 0,
  backgroundColor: "black",
});
