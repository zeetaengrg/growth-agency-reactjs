import { Link } from "react-router-dom";
import { ActiveLink } from "@components/elements";

const NavLinkItem = ({ item }) => {
  return (
    <li key={item} aria-label={`Navigation link to ${item} section`}>
      {item === "Home" ? (
        <Link to="/">{item}</Link>
      ) : (
        <ActiveLink item={item} />
      )}
    </li>
  );
};

export default NavLinkItem;
