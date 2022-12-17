import { styled } from "@stitches/react";
import { useEffect } from "react";
import Experience from "../../components/Experience";

const SingleRoom = () => {
  let canvas: HTMLElement;
  useEffect(() => {
    if (canvas) return;

    canvas = document.getElementById("canvas")!;
    new Experience(canvas);
  }, []);
  return (
    <App asscroll-container>
      <Wrapper>
        <Canvas id="canvas" />
      </Wrapper>
    </App>
  );
};

export default SingleRoom;

const App = styled("div", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

const Wrapper = styled("div", {
  position: "fixed",
  width: "100vw",
  height: "100vh",
});

const Canvas = styled("canvas", {
  width: "100%",
  height: "100%",
});
