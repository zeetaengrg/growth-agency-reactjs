import logo from "@assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="nav">
      <figure className="nav__logo">
        <img src={logo} alt="Logo" />
      </figure>
    </header>
  );
};

export default Navbar;
