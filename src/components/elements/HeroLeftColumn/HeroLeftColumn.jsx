import "./HeroLeftColumn.scss";

const HeroLeftColumn = () => {
  return (
    <section aria-labelledby="hero-header" class="left-col">
      <h1 id="hero-header" class="left-col__header">
        Tell a better brand story
      </h1>
      <p class="left-col__subheader">
        Warrant present garrets limited cordial in inquiry to. Supported me
        sweetness behaviour shameless excellent so arranging.
      </p>
      <div class="left-col__btn">
        <button class="btn btn__primary">Get Started</button>
        <button class="btn btn__secondary">Contact Us</button>
      </div>
    </section>
  );
};
export default HeroLeftColumn;
