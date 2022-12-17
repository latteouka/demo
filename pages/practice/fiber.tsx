import {
  App,
  DOM,
  DOMWrapper,
  Margin,
  Wrapper,
} from "../../components/Practice/Styles/Main";
import Toggle from "../../components/Practice/DOM/Toggle";
import HeroSection from "../../components/Practice/DOM/Head";
import FiberCanvas from "../../components/Practice/FiberCanvas";
import { useRef } from "react";
import Section1 from "../../components/Practice/DOM/Section1";
import Section2 from "../../components/Practice/DOM/Section2";
import Section3 from "../../components/Practice/DOM/Section3";
import gsap from "gsap";

import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Preloader from "../../components/Practice/DOM/Preloader";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SingleRoom = () => {
  const ref = useRef(null);
  return (
    <App ref={ref}>
      <Wrapper>
        <FiberCanvas eventSource={ref} eventPrefix="client" />
      </Wrapper>
      <DOM id="smooth-wrapper">
        <Toggle />

        <DOMWrapper id="smooth-content">
          <Preloader />
          <HeroSection />
          <Margin className="margin-one" />
          <Section1 />
          <Margin className="margin-two" />
          <Section2 />
          <Margin className="margin-three" />
          <Section3 />

          <Margin />
        </DOMWrapper>
      </DOM>
    </App>
  );
};

export default SingleRoom;
