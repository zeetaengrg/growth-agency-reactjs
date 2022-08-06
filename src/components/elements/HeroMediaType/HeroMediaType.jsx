import { HeroIcons } from "@components/elements";
import "./HeroMediaType.scss";

const HeroMediaType = () => {
  return (
    <div class="media">
      <div class="media__top">
        <h4 class="media__header">Media Type</h4>
        <HeroIcons />
      </div>
      <div class="media__body">
        <div class="media__circle-top"></div>
        <div class="media__circle-btm"></div>
        <div class="media__tooltip">
          <p class="media__tooltip-text">
            72.3% of the media for #sunrise are photos.
          </p>
          <span class="media__triangle"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroMediaType;
