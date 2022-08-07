import planDay from "@assets/images/planday.svg";
import umbraco from "@assets/images/umbraco.svg";
import pearlFisher from "@assets/images/pearlfisher.svg";
import brightPearl from "@assets/images/brightpearl.svg";
import "./Clients.scss";

const Clients = () => {
  return (
    <section className="clients">
      <figure className="clients__logo">
        <img src={planDay} alt="Planday Logo" />
      </figure>
      <figure className="clients__logo">
        <img src={umbraco} alt="Umbraco Logo" />
      </figure>
      <figure className="clients__logo">
        <img src={pearlFisher} alt="Pearl Fisher Logo" />
      </figure>
      <figure className="clients__logo">
        <img src={brightPearl} alt="Bright Pearl Logo" />
      </figure>
      <figure className="clients__logo">
        <img src={planDay} alt="Planday Logo" />
      </figure>
    </section>
  );
};

export default Clients;
