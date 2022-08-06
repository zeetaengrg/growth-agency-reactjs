import star from "@assets/images/star.svg";
import arrow from "@assets/images/arrow-direction.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <aside className="hero__aside">
        <figure className="hero__img-wrapper">
          <img src={star} alt="Star" className="hero__star" />
          <img src={arrow} alt="Arrow" className="hero__arrow" />
        </figure>
      </aside>
    </section>
  );
};

export default Hero;
