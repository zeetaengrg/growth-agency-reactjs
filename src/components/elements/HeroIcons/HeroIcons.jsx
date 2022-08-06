import { FaBorderAll, FaDownload } from "react-icons/fa";
import "./HeroIcons.scss";

const HeroIcons = () => {
  return (
    <div className="icons">
      <figure className="icon">
        <FaBorderAll />
      </figure>
      <figure className="icon">
        <FaDownload />
      </figure>
    </div>
  );
};

export default HeroIcons;
