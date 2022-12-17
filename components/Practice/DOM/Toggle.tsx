import { styled } from "../../../stitches.config";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(targetTheme);
  };
  return (
    <Bar className="toggle-bar">
      <IconWrapper style="sun">
        <FiSun />
      </IconWrapper>
      <ButtonWrapper onClick={toggleTheme}>
        <Button dark={resolvedTheme === "dark"} />
      </ButtonWrapper>

      <IconWrapper style="moon">
        <FiMoon />
      </IconWrapper>
    </Bar>
  );
};

export default Toggle;

const Bar = styled("div", {
  position: "fixed",
  opacity: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  top: 48,
  right: 48,
  zIndex: 999999,
});

const IconWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "$text",
  fontSize: 24,

  variants: {
    style: {
      sun: {
        fontSize: 28,
        marginRight: 10,
      },
      moon: {
        marginLeft: 10,
      },
    },
  },
});

const Button = styled("div", {
  position: "absolute",
  left: 6,
  borderRadius: 9999,
  width: 20,
  height: 20,
  backgroundColor: "$background",
  transition: "all 0.2s ease-in-out",

  variants: {
    dark: {
      true: {
        left: 30,
      },
    },
  },
});

const ButtonWrapper = styled("button", {
  cursor: "pointer",
  position: "relative",
  width: 56,
  height: 28,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$pink",
  borderRadius: 9999,
  margin: "0 16",
  border: "none",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

  [`&:hover > ${Button}`]: {
    transform: "scale(0.9)",
  },
});
