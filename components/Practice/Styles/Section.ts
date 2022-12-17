import { styled } from "../../../stitches.config";

export const SectionWrapper = styled("div", {
  width: "50%",
  padding: "1000px 4%",
  margin: 0,
  backgroundColor: "$background",
  transition: "0.3s",

  "@bp1": {
    width: "100%",
  },

  variants: {
    margin: {
      left: {
        marginRight: "auto",
      },
      right: {
        marginLeft: "auto",
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
      },
      green: {
        borderBottom: "2px solid $green",
      },
      blue: {
        borderBottom: "2px solid $blue",
      },
    },
  },
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

export const ProgressBar = styled("div", {});
