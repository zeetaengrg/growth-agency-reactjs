import { PricingPlan, SectionHeader } from "@components/elements";
import { pricingData } from "@data/pricing-data";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <section className="pricing" aria-labelledby="pricing-header">
      <SectionHeader
        id="pricing-header"
        title="Our Plans Scale With Your Product"
        subtitle="Choose the best pricing plans as per your requirement. We will provide you with the most suitable plan for your product"
      />
      <section className="pricing__content">
        {pricingData.map((price) => (
          <PricingPlan
            key={price.id}
            title={price.title}
            price={price.price}
            features={price.features}
          />
        ))}
      </section>
    </section>
  );
};
export default Pricing;
