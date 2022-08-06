import {
  Clients,
  Hero,
  Newsletter,
  OurServices,
  Pricing,
  Testimonials,
  WorkProcess,
  WorkWithUs,
} from "@components/templates";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Clients />
      <OurServices />
      <WorkProcess />
      <Pricing />
      <Testimonials />
      <WorkWithUs />
      <Newsletter />
    </div>
  );
};

export default Home;
