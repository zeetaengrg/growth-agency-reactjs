import { planDay, umbraco, pearlFisher, brightPearl } from "@assets/images";
import "./Clients.scss";

const Clients = () => {
  const clientList = [
    {
      id: 1,
      name: "Plan Day",
      imgSrc: planDay,
    },
    {
      id: 2,
      name: "Umbraco",
      imgSrc: umbraco,
    },
    {
      id: 3,
      name: "Pearl Fisher",
      imgSrc: pearlFisher,
    },
    {
      id: 4,
      name: "Bright Pearl",
      imgSrc: brightPearl,
    },
    {
      id: 5,
      name: "Plan Day",
      imgSrc: planDay,
    },
  ];

  return (
    <section className="clients">
      {clientList.map((client) => (
        <figure className="clients__logo" key={client.id}>
          <img
            className="clients__logo-img"
            src={client.imgSrc}
            alt={`${client.name} Logo`}
          />
        </figure>
      ))}
    </section>
  );
};

export default Clients;
