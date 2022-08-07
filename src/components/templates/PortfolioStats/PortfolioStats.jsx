import { SectionHeader } from "@components/elements";
import "./PortfolioStats.scss";

const PortfolioStats = () => {
  return (
    <section className="portfolio" aria-labelledby="portfolio-header">
      <section className="portfolio__top-content">
        <article className="portfolio__completed">
          <p className="portfolio__num">25,356</p>
          <p className="portfolio__text">Projects Completed</p>
        </article>
        <article className="portfolio__revenue">
          <p className="portfolio__num">$1M+</p>
          <p className="portfolio__text">Revenue Generated</p>
        </article>
        <article className="portfolio__customer">
          <p className="portfolio__num">95%</p>
          <p className="portfolio__text">Happy Customers</p>
        </article>
      </section>
      <SectionHeader
        id="portfolio-header"
        title="Want To Start A Project With Us?"
        subtitle="Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging."
      />
      <button className="portfolio__btn">Get Started</button>
    </section>
  );
};

export default PortfolioStats;
