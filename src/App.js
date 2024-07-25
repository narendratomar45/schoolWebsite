import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Acadmics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Gallery from "./pages/Gallary";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
