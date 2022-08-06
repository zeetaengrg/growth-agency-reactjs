import star from "@assets/images/star.svg";
import arrow from "@assets/images/arrow-direction.svg";
import "./HeroAsideImg.scss";

const HeroAsideImg = () => {
  return (
    <figure className="aside__img">
      <img src={star} alt="Star" className="aside__star" />
      <img src={arrow} alt="Arrow" className="aside__arrow" />
    </figure>
  );
};

export default HeroAsideImg;
