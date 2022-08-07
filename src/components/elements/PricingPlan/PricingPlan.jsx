import { FaCheckCircle } from "react-icons/fa";
import "./PricingPlan.scss";

const PricingPlan = ({ title, price, features }) => {
  return (
    <article className="plan plan--active">
      <h2 className="plan__title">{title}</h2>
      <p className="plan__price">{price}</p>
      <ul className="plan__lists">
        {features.map((feature) => (
          <li className="plan__list" v-for="feature of features" key={feature}>
            <FaCheckCircle />
            <p className="plan__list-item">{feature}</p>
          </li>
        ))}
      </ul>
      <button className="plan__btn">Purchase Package</button>
    </article>
  );
};

export default PricingPlan;
