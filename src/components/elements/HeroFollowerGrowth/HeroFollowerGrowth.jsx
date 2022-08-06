import "./HeroFollowerGrowth.scss";

const HeroFollowerGrowth = () => {
  return (
    <div class="growth">
      <div class="growth__left">
        <p class="growth__left-text">14k</p>
      </div>
      <div class="growth__right">
        <p class="growth__header">Follower Growth</p>
        <div class="growth__horizontal-bar">
          <div class="growth__bar"></div>
          <div class="growth__bar"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroFollowerGrowth;
