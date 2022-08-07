import star from "@assets/images/star.svg";
import arrow from "@assets/images/arrow-direction.svg";
import {
  WorkLeftCard,
  WorkRightCardBtm,
  WorkRightCardTop,
} from "@components/modules";
import "./WorkProcess.scss";

const WorkProcess = () => {
  return (
    <section className="work" aria-labelledby="work-header">
      <section className="work__left-col">
        <article className="work__header">
          <h1 className="work__title" id="work-header">
            How It Works?
          </h1>
          <p className="work__subtitle">
            Resolving neglected sir tolerably but existence conveying for. Day
            his put off unaffected literature partiality inhabiting.
          </p>
        </article>
        <WorkLeftCard />
      </section>
      <section className="work__right-col">
        <WorkRightCardTop />
        <WorkRightCardBtm />
      </section>
      <figure className="work__aside">
        <img className="work__aside-star" src={star} alt="Star" />
        <img className="work__aside-arrow" src={arrow} alt="Arrow" />
      </figure>
    </section>
  );
};
export default WorkProcess;
