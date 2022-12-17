import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { styled } from "../../stitches.config";

export function debounce(func, wait = 5, immediate = false) {
  let timeout;
  return function () {
    // 保存當下狀態
    const context = this; // window
    const args = arguments; // event

    // the func that will be executed after waiting
    const later = function () {
      // if executed then reset timeout number
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    // clear before execute (連續動作未結束)
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, []);

  const [{ springscrollY }, api] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 20;

  api.start({ springscrollY: scrollY });

  return (
    <Container>
      <Slow
        style={{
          transform: springscrollY.to(
            (value) => `translateY(${value / parallaxLevel}px)`
          ),
        }}
      >
        我比較慢
      </Slow>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
      urna nibh, viverra non, semper suscipit, posuere a, pede.
    </Container>
  );
};

export default Parallax;

const Slow = styled(animated.div, {
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

  [`&:hover ${Slow}`]: {
    color: "#000",
  },
});
