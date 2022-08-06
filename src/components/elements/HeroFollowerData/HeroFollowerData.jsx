import { HeroIcons } from "@components/elements";
import "./HeroFollowerData.scss";

const HeroFollowerData = () => {
  return (
    <section aria-labelledby="follower-growth-header" className="data">
      <article className="data__top">
        <h3 id="follwer-growth-header" className="data__top-header">
          Follower Growth
        </h3>
        <HeroIcons />
      </article>
      <article className="data__center">
        <p className="data__center-num">16.2k</p>
        <p className="data__center-followers">New Followers</p>
      </article>
      <div className="data__btm">
        <div className="data__btm-top">
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
          <div className="data__bar"></div>
        </div>
        <div className="data__btm-btm">
          <div className="data__btm-scale">
            <p>8k</p>
            <hr className="hr__line" />
          </div>
          <div className="data__btm-scale">
            <p>6k</p>
            <hr className="hr__line" />
          </div>
          <div className="data__btm-scale">
            <p>4k</p>
            <hr className="hr__line" />
          </div>
          <div className="data__btm-scale">
            <p>2k</p>
            <hr className="hr__line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFollowerData;
