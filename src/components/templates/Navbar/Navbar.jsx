import { Link } from "react-router-dom";

import { NavLinkItem, NavLogo } from "@components/elements";
import "./Navbar.scss";

const Navbar = () => {
  const linksItem = ["Home", "About Us", "Services", "Contact Us"];

  return (
    <header className="nav">
      <NavLogo />
      <nav className="nav__links" aria-labelledby="primary-navigation">
        <ul className="nav__items">
          {linksItem.map((item) => (
            <NavLinkItem key={item} item={item} />
          ))}
        </ul>
      </nav>
      <Link to="/login">
        <button className="nav__login-btn">Login</button>
      </Link>
    </header>
  );
};

export default Navbar;
