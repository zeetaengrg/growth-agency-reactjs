import profileImg from "@assets/images/profile-img.jpg";
import "./HeroRightProfile.scss";

const HeroRightProfile = () => {
  return (
    <section id="profile-container" className="profile">
      <figure className="profile__img-wrapper">
        <img className="profile__img" src={profileImg} alt="Profile" />
      </figure>
      <section aria-labelledby="profile-title" className="profile__wrapper">
        <h2 id="profile-title" className="profile__heading">
          Amanda M. Data
        </h2>
        <div className="profile__body">
          <p className="profile__body-text">Your Growth</p>
          <span className="profile__body-number">3,000</span>
        </div>
      </section>
    </section>
  );
};

export default HeroRightProfile;
