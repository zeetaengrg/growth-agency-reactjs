import "./HeroLeftColumn.scss";

const HeroLeftColumn = () => {
  return (
    <section
      aria-labelledby="hero-header"
      className="left-col"
      aria-describedby="hero-subheader"
    >
      <h1 id="hero-header" className="left-col__header">
        Tell a better brand story
      </h1>
      <p id="hero-subheader" className="left-col__subheader">
        Warrant present garrets limited cordial in inquiry to. Supported me
        sweetness behaviour shameless excellent so arranging.
      </p>
      <section aria-label="Button Group" className="left-col__btn">
        <button className="btn btn--primary" aria-label="Get Started">
          Get Started
        </button>
        <button className="btn btn--secondary" aria-label="Contact Us">
          Contact Us
        </button>
      </section>
    </section>
  );
};
export default HeroLeftColumn;
