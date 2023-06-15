import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from ".//components/CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Shipping from "./components/Shipping";
import Lead from "./components/Lead";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/shipping"
            element={
              <>
                <Shipping />
              </>
            }
          />
          {/* <Route
            path="/lead"
            element={
              <>
                <Lead />
              </>
            }
          /> */}
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
