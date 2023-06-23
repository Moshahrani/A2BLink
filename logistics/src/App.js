import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from ".//components/CustomNavbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Shipping from "./routes/Shipping";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        {/* <div className="content-container"> */}
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
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
          </Routes>
        {/* </div> */}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
