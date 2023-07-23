import heroImg from "../../assets/image/right.png";
import { HeroSections } from "../../Styles/Home.styled";

const HeroSection = () => {
  return (
    <HeroSections>
      <div>
        <h2>
          Learn Styled Component from <span>Code ABC</span>
        </h2>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </HeroSections>
  );
};

export default HeroSection;
