import { TopSection } from "../../Styles/Home.styled";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Topbar = () => {
  return (
    <TopSection>
      <Navbar />
      <HeroSection />
    </TopSection>
  );
};

export default Topbar;
