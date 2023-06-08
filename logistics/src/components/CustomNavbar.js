import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/CustomNavbar.css";
// import A2B from ".//assets/A2B.png";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [opacity, setOpacity] = useState(1);

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
      onToggle={setExpanded}
      // bg="dark"
      variant="dark"
      style={{ opacity: opacity }}
    >
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
        {/* <img src={} className="personal-logo" alt="Personal Logo" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/shipping" onClick={() => setExpanded(false)}>
            Shipping
          </Nav.Link>
          <Nav.Link as={Link} to="/lead" onClick={() => setExpanded(false)}>
            Lead
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
            Contact
          </Nav.Link>
        </Nav>
        {/* <img src={}  className="custom-logo" alt="Brand Logo" /> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;