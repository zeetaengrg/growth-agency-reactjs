import "./SectionHeader.scss";

const SectionHeader = ({ title, subtitle, id }) => {
  return (
    <header className="section__header">
      <h1 className="section__title" id={id}>
        {title}
      </h1>
      <p className="section__subtitle">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
