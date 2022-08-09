import {
  Clients,
  Hero,
  Newsletter,
  OurServices,
  Pricing,
  Testimonials,
  WorkProcess,
  PortfolioStats,
} from "@components/templates";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <OurServices />
      <WorkProcess />
      <Pricing />
      <Testimonials />
      <PortfolioStats />
      <Newsletter />
    </>
  );
};

export default Home;
