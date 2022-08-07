import { Ratings } from "@components/elements";
import "./TestimonialCard.scss";

const TestimonialCard = ({ name, message, location, rating }) => {
  return (
    <article className="testimonial__item testimonial__item--active">
      <Ratings rating={rating} />
      <p className="testimonial__item-text">{message}</p>
      <div className="testimonial__client-wrapper">
        <p className="testimonial__client-name">{name}</p>
        <p className="testimonial__client-location">{location}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
