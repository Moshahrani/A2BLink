import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../css/CustomNavbar.css";
import resized from "../assets/resized.png";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const location = useLocation();

  // scrolls back to top of page for each route when clicked
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 50) {
        setOpacity(0.7);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className="custom-navbar sticky-top"
      expand="lg"
      expanded={expanded}
      onToggle={(expanded) => {
        setExpanded(expanded);
        setOpacity(
          expanded ? 1 : document.scrollingElement.scrollTop > 50 ? 0.7 : 1
        );
      }}
      variant="dark"
      style={{ opacity: opacity }}
    >
      <Navbar.Brand>
        <img src={resized} className="company-logo" alt="company Logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ color: "#fff", backgroundColor: "#000" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => setExpanded(false)}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => setExpanded(false)}
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/shipping"
            onClick={() => setExpanded(false)}
            className={location.pathname === "/shipping" ? "active-link" : ""}
          >
            Shipping
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            onClick={() => setExpanded(false)}
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Nav.Link>
        </Nav>
        <img src={resized} className="custom-logo" alt="Brand Logo" />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
