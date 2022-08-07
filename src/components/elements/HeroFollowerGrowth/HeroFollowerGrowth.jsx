import "./HeroFollowerGrowth.scss";

const HeroFollowerGrowth = () => {
  return (
    <div className="growth">
      <div className="growth__left">
        <p className="growth__left-text">14k</p>
      </div>
      <div className="growth__right">
        <p className="growth__header">Follower Growth</p>
        <div className="growth__horizontal-bar">
          <div className="growth__bar"></div>
          <div className="growth__bar"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroFollowerGrowth;
