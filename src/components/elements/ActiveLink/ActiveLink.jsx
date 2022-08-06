import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ item }) => {
  const location = useLocation();
  const path = location.pathname;

  const style = {
    color:
      path === `/${item.replace(/\s+/g, "-").toLocaleLowerCase()}`
        ? "#ad66fa"
        : "#3E4581",
  };

  return (
    <Link
      to={`/${item.replace(/\s+/g, "-").toLocaleLowerCase()}`}
      style={style}
    >
      {item}
    </Link>
  );
};

export default ActiveLink;
