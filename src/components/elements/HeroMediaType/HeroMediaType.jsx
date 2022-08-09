import pieChart from "@assets/images/pie-chart.svg";
import { HeroIcons } from "@components/elements";
import "./HeroMediaType.scss";

const HeroMediaType = () => {
  return (
    <section className="media" aria-labelledby="media-header">
      <div className="media__top">
        <h4 id="media-header" className="media__header">
          Media Type
        </h4>
        <HeroIcons />
      </div>
      <article className="media__body">
        <figure className="media__pie">
          <img src={pieChart} alt="Pie Chart" className="media__pie-chart" />
        </figure>
        <div className="media__tooltip">
          <p className="media__tooltip-text">
            72.3% of the media for #sunrise are photos.
          </p>
          <span className="media__triangle"></span>
        </div>
      </article>
    </section>
  );
};

export default HeroMediaType;
