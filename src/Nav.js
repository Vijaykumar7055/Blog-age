import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import "./cute.css";

const Header = () => {
  const Nav_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tour",
      display: "Blog",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  };

  return (
    <>  
     <Navbar fixed='top' bg={darkMode ? "dark" : "danger"} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="me-4 nav-link">Vijay Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Nav_links.map((Element, index) => (
              <Nav.Link className="nav-link" key={index} href={Element.path}>{Element.display}</Nav.Link>
            ))}
          </Nav>
          <div onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize:"50px", color: darkMode ? "#ffc107" : "#212529" }}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>  
  );
};

export default Header;
