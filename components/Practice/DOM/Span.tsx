import { styled } from "@stitches/react";

type SpanPropsType = {
  text: string;
};

const Span = ({ text }: SpanPropsType) => {
  const chars = text.split("");
  return (
    <div style={{ overflow: "hidden" }}>
      {chars.map((item, index) => {
        if (item === " ") {
          console.log(true);
          return <span key={index}>&nbsp;</span>;
        } else {
          return (
            <HiddenSpan key={index} className="animate">
              {item}
            </HiddenSpan>
          );
        }
      })}
    </div>
  );
};

export default Span;

const HiddenSpan = styled("span", {});
