import {
  HeroEmojis,
  HeroFollowerData,
  HeroFollowerGrowth,
  HeroMediaType,
  HeroRightProfile,
} from "@components/elements";
import "./HeroRightColumn.scss";

const HeroRightColumn = () => {
  return (
    <section className="right-col" id="hero-right-content">
      <HeroRightProfile />
      <HeroFollowerData />
      <HeroMediaType />
      <HeroFollowerGrowth />
      <HeroEmojis />
    </section>
  );
};
export default HeroRightColumn;
