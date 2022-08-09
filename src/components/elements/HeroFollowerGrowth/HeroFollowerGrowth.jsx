import "./HeroFollowerGrowth.scss";

const HeroFollowerGrowth = () => {
  return (
    <section aria-labelledby="growth-header" className="growth">
      <div className="growth__left">
        <p className="growth__left-text">14k</p>
      </div>
      <div className="growth__right">
        <h3 id="growth-header" className="growth__header">
          Follower Growth
        </h3>
        <div className="growth__horizontal-bar">
          <div className="growth__bar"></div>
          <div className="growth__bar"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroFollowerGrowth;
