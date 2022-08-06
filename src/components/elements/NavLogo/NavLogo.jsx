import { Link } from "react-router-dom";

import logo from "@assets/images/logo.svg";
import "./NavLogo.scss";

const NavLogo = () => {
  return (
    <Link to="/">
      <figure className="logo">
        <img src={logo} alt="Logo" />
        <figcaption className="logo__caption">
          <p className="logo__text">Brands.io</p>
        </figcaption>
      </figure>
    </Link>
  );
};
export default NavLogo;
