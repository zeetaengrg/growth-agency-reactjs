import { FaStar, FaStarHalf } from "react-icons/fa";
import "./Ratings.scss";

const Ratings = ({ rating }) => {
  return (
    <div className="ratings">
      <span className="ratings__icon">
        {rating >= 1 ? <FaStar /> : rating >= 0.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span className="ratings__icon">
        {rating >= 2 ? <FaStar /> : rating >= 1.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span className="ratings__icon">
        {rating >= 3 ? <FaStar /> : rating >= 2.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span className="ratings__icon">
        {rating >= 4 ? <FaStar /> : rating >= 3.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span className="ratings__icon">
        {rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalf /> : <FaStar />}
      </span>
    </div>
  );
};

export default Ratings;
