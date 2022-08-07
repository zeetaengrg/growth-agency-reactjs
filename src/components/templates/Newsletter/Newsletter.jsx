import profileImg from "@assets/images/1.jpg";
import { SectionHeader } from "@components/elements";
import { FaPlay } from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter" aria-labelledby="newsletter-header">
      <SectionHeader
        id="newsletter-header"
        title="Social Media Its Ways of Our Excellence"
        subtitle="Subscribe to our newsletter to get the latest news and updates"
      />
      <form className="newsletter__subscribe">
        <input
          className="newsletter__input"
          type="email"
          placeholder="Enter your email"
        />
        <div className="newsletter__btn-wrapper">
          <button className="cssbuttons-io-button">
            Get started
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
      <article className="newsletter__video">
        <figure className="newsletter__profile-img">
          <img className="newsletter__img" src={profileImg} alt="Profile" />
          <div className="newsletter__btn">
            <FaPlay className="newsletter__play-btn" />
          </div>
        </figure>
        <a className="newsletter__link" href="#">
          Watch Our Video
        </a>
      </article>
    </section>
  );
};
export default Newsletter;
