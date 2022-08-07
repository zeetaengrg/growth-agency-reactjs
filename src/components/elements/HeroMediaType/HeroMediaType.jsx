import pieChart from "@assets/images/pie-chart.svg";
import { HeroIcons } from "@components/elements";
import "./HeroMediaType.scss";

const HeroMediaType = () => {
  return (
    <div className="media">
      <div className="media__top">
        <h4 className="media__header">Media Type</h4>
        <HeroIcons />
      </div>
      <div className="media__body">
        <figure className="media__pie">
          <img src={pieChart} alt="Pie Chart" className="media__pie-chart" />
        </figure>
        <div className="media__tooltip">
          <p className="media__tooltip-text">
            72.3% of the media for #sunrise are photos.
          </p>
          <span className="media__triangle"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroMediaType;
