import { HeroRightColumn } from "@components/modules";
import { HeroAsideImg, HeroLeftColumn } from "@components/elements";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <HeroAsideImg />
      <HeroLeftColumn />
      <HeroRightColumn />
    </section>
  );
};

export default Hero;
