import profileImg from "@assets/images/1.jpg";
import { CardHeader } from "@components/elements";
import { FaAngleDown } from "react-icons/fa";
import "./WorkLeftCard.scss";

const WorkLeftCard = () => {
  return (
    <section className="left__card" id="card-container">
      <section className="left__content">
        <article className="left__profile">
          <div className="left__bar"></div>
          <div className="left__bar"></div>
          <figure className="left__img-wrapper">
            <img src={profileImg} alt="Profile Image" className="left__img" />
            <div className="left__bar"></div>
          </figure>
        </article>
        <article className="left__drop-menu">
          <figure className="left__icon-wrapper">
            <FaAngleDown />
          </figure>
          <div className="left__bar"></div>
        </article>
      </section>
      <CardHeader
        title="Intelligence"
        subtitle="Marketing intelligence (MI) is the everyday information relevant to
        a company's markets"
      />
    </section>
  );
};

export default WorkLeftCard;
