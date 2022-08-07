import surpriseEmoji from "@assets/images/surprise.svg";
import angryEmoji from "@assets/images/angry.svg";
import heartEmoji from "@assets/images/heart.svg";
import "./HeroEmojis.scss";

const HeroEmojis = () => {
  return (
    <article className="emojis">
      <img src={surpriseEmoji} alt="Surprise Emoji" className="emoji" />
      <img src={angryEmoji} alt="Angry Emoji" className="emoji" />
      <img src={heartEmoji} alt="Heart Emoji" className="emoji" />
    </article>
  );
};

export default HeroEmojis;
