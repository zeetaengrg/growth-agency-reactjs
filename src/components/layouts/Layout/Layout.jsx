import { Footer, Navbar } from "@components/templates";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
