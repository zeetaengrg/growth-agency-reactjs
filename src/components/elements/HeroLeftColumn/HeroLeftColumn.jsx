import "./HeroLeftColumn.scss";

const HeroLeftColumn = () => {
  return (
    <section aria-labelledby="hero-header" className="left-col">
      <h1 id="hero-header" className="left-col__header">
        Tell a better brand story
      </h1>
      <p className="left-col__subheader">
        Warrant present garrets limited cordial in inquiry to. Supported me
        sweetness behaviour shameless excellent so arranging.
      </p>
      <div className="left-col__btn">
        <button className="btn btn__primary">Get Started</button>
        <button className="btn btn__secondary">Contact Us</button>
      </div>
    </section>
  );
};
export default HeroLeftColumn;
