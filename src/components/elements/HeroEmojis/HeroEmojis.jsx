import { surpriseEmoji, heartEmoji, angryEmoji } from "@assets/images";
import "./HeroEmojis.scss";

const HeroEmojis = () => {
  const emojiList = [
    {
      id: 1,
      name: "Surprise Emoji",
      imgSrc: surpriseEmoji,
    },
    {
      id: 2,
      name: "Angry Emoji",
      imgSrc: angryEmoji,
    },
    {
      id: 3,
      name: "Heart Emoji",
      imgSrc: heartEmoji,
    },
  ];

  return (
    <article className="emojis">
      {emojiList.map((emoji) => (
        <img
          key={emoji.id}
          src={emoji.imgSrc}
          alt={emoji.name}
          className="emoji"
        />
      ))}
    </article>
  );
};

export default HeroEmojis;
