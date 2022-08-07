import { SectionHeader } from "@components/elements";
import { TestimonialCard } from "@components/modules";
import { testimonialsData } from "@data/testimonials-data";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-header">
      <SectionHeader
        id="testimonials-header"
        title="What Our Clients Say About Us"
        subtitle="Community development is often linked with community work or community planning, and may involve stakeholders, foundations,"
      />
      <section className="testimonials__items">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            message={testimonial.message}
            location={testimonial.location}
            rating={testimonial.rating}
          />
        ))}
      </section>
      <section className="testimonials__carousel-btns">
        <button className="testimonials__btn-prev">
          <FaLongArrowAltLeft />
        </button>
        <button className="testimonials__btn-next">
          <FaLongArrowAltRight />
        </button>
      </section>
    </section>
  );
};
export default Testimonials;
