import "./CardHeader.scss";

const CardHeader = ({ title, subtitle }) => {
  return (
    <article className="card__header">
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{subtitle}</p>
    </article>
  );
};

export default CardHeader;
