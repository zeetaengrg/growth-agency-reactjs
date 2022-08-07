import { MdLocationOn } from "react-icons/md";
import "./CardProfile.scss";

const CardProfile = ({ profileImg }) => {
  return (
    <article className="card__profile">
      <figure className="card__img-wrapper">
        <img src={profileImg} alt="Profile Image" className="card__img" />
      </figure>
      <div className="card__bar-wrapper">
        <div className="card__bar"></div>
        <div className="card__bar"></div>
      </div>
      <figure className="card__icon-wrapper">
        <MdLocationOn />
      </figure>
    </article>
  );
};

export default CardProfile;
