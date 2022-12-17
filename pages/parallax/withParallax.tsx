import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { styled } from "../../stitches.config";

export default function MyComponent() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1.5}>
        <Container>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <Slow>我比較慢</Slow>
      </ParallaxLayer>
    </Parallax>
  );
}

const Slow = styled("div", {
  top: "50%",
  fontFamily: "sans-serif",
  textAlign: "center",
  margin: 0,
  backgroundImage:
    "linear-gradient(135deg, rgb(245, 177, 77), rgb(237, 53, 115))",
  color: "#fff",
  padding: "2rem",
  borderRadius: "0.5rem",
  boxShadow: "0px 10px 25px -10px rgba(0, 0, 0, 0.2)",
  position: "fixed",
  width: "auto",
  boxSizing: "border-box",
  fontSize: "14pt",
});

const Container = styled("div", {
  height: "300vh",
  fontFamily: "sans-serif",
  fontSize: "100pt",
  color: "#ffc2c2",
});
