import { SectionHeader, ServicesCard } from "@components/elements";
import { servicesData } from "@data/services-data";
import "./OurServices.scss";

const OurServices = () => {
  return (
    <section className="services" aria-labelledby="services-header">
      <SectionHeader
        id="services-header"
        title="What We Offer?"
        subtitle="In virtual space through communication platforms. Durable relations that extend beyond immediate genealogical ties."
      />
      <section className="services__content">
        {servicesData.map((service) => (
          <ServicesCard
            key={service.id}
            Icon={service.icon}
            title={service.title}
            desc={service.description}
          />
        ))}
      </section>
    </section>
  );
};

export default OurServices;
