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
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Clients />
      <OurServices />
      <WorkProcess />
      <Pricing />
      <Testimonials />
      <PortfolioStats />
      <Newsletter />
    </div>
  );
};

export default Home;
