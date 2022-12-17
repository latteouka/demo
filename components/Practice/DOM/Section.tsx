import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "../../../stitches.config";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface SectionPropsType {
  children: React.ReactNode;
  title: string;
  number: string;
  margin: "left" | "right";
  color: "pink" | "blue" | "green";
}

const Section = ({
  children,
  title,
  number,
  margin,
  color,
}: SectionPropsType) => {
  const skip = useRef(false);
  const sectionRef = useRef(null);
  const progressBarWrapperRef = useRef(null);
  const progressBarRef = useRef(null);

  const register = useCallback(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  register();

  useEffect(() => {
    // have to do this or gsap will mount twice because of useEffect!!!
    if (skip.current) return;
    skip.current = true;

    if (margin === "right") {
      gsap.to(sectionRef.current, {
        borderTopLeftRadius: 10,
        scrollTrigger: {
          trigger: sectionRef.current,
          // top of the trigger hits the bottom of the viewport
          start: "top bottom",
          // top of the trigger hits the top of the viewport
          end: "top top",
          scrub: 0.6,
        },
      });
      gsap.to(sectionRef.current, {
        borderBottomLeftRadius: 700,
        scrollTrigger: {
          trigger: sectionRef.current,
          // bottom of the trigger hits the bottom of the viewport
          start: "bottom bottom",
          // bottom of the trigger hits the top of the viewport
          end: "bottom top",
          scrub: 0.6,
        },
      });
    } else {
      gsap.to(sectionRef.current, {
        borderTopRightRadius: 10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 0.6,
        },
      });
      gsap.to(sectionRef.current, {
        borderBottomRightRadius: 700,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }
    gsap.from(progressBarRef.current, {
      height: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: progressBarWrapperRef.current,
        pinSpacing: false,
        scrub: 0.4,
      },
    });
  }, []);
  return (
    <SectionWrapper margin={margin} ref={sectionRef}>
      <ProgressBarWrapper margin={margin} ref={progressBarWrapperRef}>
        <ProgressBar ref={progressBarRef} color={color} />
      </ProgressBarWrapper>
      <IntroWrapper color={color}>
        <SectionTitle color={color}>
          <span>{title}</span>
          <SectionDeco style="one" color={color} />
          <SectionDeco style="two" color={color} />
          <SectionDeco style="three" color={color} />
        </SectionTitle>
        <p>{number}</p>
      </IntroWrapper>
      {children}
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled("div", {
  position: "relative",
  width: "50%",
  padding: "1000px 4%",
  margin: 0,
  backgroundColor: "$background",
  transition: "background 0.3s",
  overflow: "hidden",

  "@bp2": {
    width: "100%",
  },

  variants: {
    margin: {
      left: {
        marginRight: "auto",
        borderTopRightRadius: "700px 700px",
        borderBottomRightRadius: "10px 10px",
      },
      right: {
        marginLeft: "auto",
        borderTopLeftRadius: "700px 700px",
        borderBottomLeftRadius: "10px 10px",
      },
    },
    color: {
      pink: {
        color: "$pink",
        borderColor: "$pink",
      },
      green: {
        color: "$green",
        borderColor: "$green",
      },
      blue: {
        color: "$blue",
        borderColor: "$blue",
      },
    },
  },
});

export const IntroWrapper = styled("div", {
  position: "relative",
  padding: "20% 5%",
  borderBottom: "2px solid $pink",
  paddingBottom: "400px",

  "& p": {
    position: "absolute",
    bottom: 15,
    right: 0,
    color: "$pink",
    fontSize: 24,
  },

  variants: {
    color: {
      pink: {
        borderBottom: "2px solid $pink",
        "& p": {
          color: "$pink",
        },
      },
      green: {
        borderBottom: "2px solid $green",
        "& p": {
          color: "$green",
        },
      },
      blue: {
        borderBottom: "2px solid $blue",
        "& p": {
          color: "$blue",
        },
      },
    },
  },
});

export const SectionTitle = styled("div", {
  position: "relative",
  color: "$pink",

  "& span": {
    display: "block",
    fontSize: "40px",
    fontWeight: 500,
    transformOrigin: "left",
    transform: "skewY(25deg)",
    textTransform: "uppercase",
    zIndex: 5,
  },
  variants: {
    color: {
      pink: {
        color: "$pink",
      },
      green: {
        color: "$green",
      },
      blue: {
        color: "$blue",
      },
    },
  },
});

export const SectionDeco = styled("div", {
  position: "absolute",
  display: "block",
  width: "100%",
  maxWidth: 278,
  height: 60,
  border: "1px solid",
  transformOrigin: "left",
  transform: "skewY(-25deg)",
  variants: {
    style: {
      one: {
        top: 0,
      },
      two: {
        top: 80,
      },
      three: {
        top: 80,
        transform: "skewY(25deg)",
      },
    },
    color: {
      pink: {
        border: "1px solid $pink",
      },
      green: {
        border: "1px solid $green",
      },
      blue: {
        border: "1px solid $blue",
      },
    },
  },

  compoundVariants: [
    {
      style: "three",
      color: "pink",
      css: {
        backgroundColor: "$pink",
      },
    },
    {
      style: "three",
      color: "green",
      css: {
        backgroundColor: "$green",
      },
    },
    {
      style: "three",
      color: "blue",
      css: {
        backgroundColor: "$blue",
      },
    },
  ],
});

export const SectionDetail = styled("div", {
  position: "relative",
  padding: "20% 5%",

  "& h3": {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.8,
    marginTop: 64,
  },
  "& p": {
    fontSize: "16px",
    lineHeight: 2,
    marginTop: 18,
  },
});

export const ProgressBarWrapper = styled("div", {
  height: 0,
  width: 12,
  zIndex: 9999,

  variants: {
    margin: {
      left: {
        position: "absolute",
        top: 0,
        left: 0,

        "@bp1": {
          position: "absolute",
          right: 0,
          left: "auto",
        },
      },
      right: {
        position: "absolute",
        top: 0,
        right: 0,
      },
    },
  },
});
const ProgressBar = styled("div", {
  height: "100vh",
  width: "100%",
  transformOrigin: "top center",
  transform: "scaleY(1)",

  variants: {
    color: {
      pink: {
        backgroundColor: "$pink",
      },
      green: {
        backgroundColor: "$green",
      },
      blue: {
        backgroundColor: "$blue",
      },
    },
  },
});
