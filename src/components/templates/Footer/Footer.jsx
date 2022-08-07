import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import arrow from "@assets/images/arrow-purple.svg";
import logo from "@assets/images/logo.svg";
import star from "@assets/images/star.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer__aside">
        <img src={star} alt="Star" className="footer__aside-star" />
        <img src={arrow} alt="Arrow" className="footer__aside-arrow" />
      </figure>
      <section className="footer__top">
        <a href="#">
          <figure className="footer__logo">
            <img className="footer__img" src={logo} alt="Logo" />
            <figcaption className="footer__caption">
              <p className="footer__brand">Brands.io</p>
            </figcaption>
          </figure>
        </a>
        <nav className="footer__nav" aria-labelledby="secondary-navigation">
          <ul>
            <li>
              <Link className="footer__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <section className="footer__social-icons">
          <FaFacebookF className="footer__icon" />
          <FaInstagram className="footer__icon" />
          <FaYoutube className="footer__icon" />
        </section>
      </section>
      <hr className="footer__line" />
      <section className="footer__bottom">
        <p className="footer__copyright">
          &copy; 2020 Brands.io. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
