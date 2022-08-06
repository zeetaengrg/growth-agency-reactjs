import profileImg from "@assets/images/profile-img.jpg";
import "./HeroRightProfile.scss";

const HeroRightProfile = () => {
  return (
    <div class="profile">
      <figure class="profile__img-wrapper">
        <img class="profile__img" src={profileImg} alt="Profile" />
      </figure>
      <section aria-labelledby="profile-title" class="profile__wrapper">
        <h2 id="profile-title" class="profile__heading">
          Amanda M. Data
        </h2>
        <div class="profile__body">
          <p class="profile__body-text">Your Growth</p>
          <span class="profile__body-number">3,000</span>
        </div>
      </section>
    </div>
  );
};

export default HeroRightProfile;
