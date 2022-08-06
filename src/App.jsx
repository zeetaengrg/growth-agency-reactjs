import { Route, Routes } from "react-router-dom";
import { Home, AboutUs, Services, ContactUs } from "@pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
