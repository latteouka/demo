import { HeadSection, HeadWrapper, Hero } from "../Styles/HeadSection";
import Span from "./Span";

const HeroSection = () => {
  return (
    <HeadSection>
      <HeadWrapper>
        <div className="intro-text">
          <Span text="Welcome to My Portfolio!" />
        </div>
        <div className="arrow-svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
              fill="currentColor"
              d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"
            />
          </svg>
        </div>
        <Hero level="main">
          <h1>Tsai Yi Chun</h1>
          <p>Software Engineer | 3D Artist</p>
        </Hero>
        <Hero level="sub">
          <h1>Chun's Room</h1>
          <p>Portfolio</p>
        </Hero>
      </HeadWrapper>
    </HeadSection>
  );
};

export default HeroSection;
