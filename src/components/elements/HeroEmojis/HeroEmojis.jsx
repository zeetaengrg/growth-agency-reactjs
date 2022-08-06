import surpriseEmoji from "@assets/images/surprise.svg";
import angryEmoji from "@assets/images/angry.svg";
import heartEmoji from "@assets/images/heart.svg";
import "./HeroEmojis.scss";

const HeroEmojis = () => {
  return (
    <article class="emojis">
      <img src={surpriseEmoji} alt="Surprise Emoji" class="emoji" />
      <img src={angryEmoji} alt="Angry Emoji" class="emoji" />
      <img src={heartEmoji} alt="Heart Emoji" class="emoji" />
    </article>
  );
};

export default HeroEmojis;
