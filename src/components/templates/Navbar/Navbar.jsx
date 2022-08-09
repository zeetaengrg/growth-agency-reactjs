import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuBoxed, CgCloseR } from "react-icons/cg";

import { NavLinkItem, NavLogo } from "@components/elements";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linksItem = ["Home", "About Us", "Services", "Contact Us"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMenu = () => (
    <CgMenuBoxed className="nav__menu-btn" onClick={toggleMenu} />
  );

  const closeMenu = () => (
    <CgCloseR className="nav__menu-btn" onClick={toggleMenu} />
  );

  return (
    <header className="nav" id="navbar">
      <NavLogo />
      <nav className="nav__links" aria-labelledby="primary-navigation">
        <ul className="nav__items">
          {linksItem.map((item) => (
            <NavLinkItem key={item} item={item} />
          ))}
        </ul>
      </nav>
      <section className="nav__right" id="right-navigation-section">
        <Link to="/login">
          <button className="nav__login-btn">Login</button>
        </Link>
        <figure className="nav__menu">
          {isOpen ? closeMenu() : openMenu()}
        </figure>
      </section>
    </header>
  );
};

export default Navbar;
