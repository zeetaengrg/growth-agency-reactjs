import "./ServicesCard.scss";

const ServicesCard = ({ Icon, title, desc }) => {
  return (
    <article className="services__card">
      <figure className="services__icon-wrapper">
        <Icon className="services__icon" />
      </figure>
      <h2 className="services__title">{title}</h2>
      <p className="services__desc">{desc}</p>
    </article>
  );
};

export default ServicesCard;
