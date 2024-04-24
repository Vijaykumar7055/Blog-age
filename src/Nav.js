import React, { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import car2 from './images/car3.jpg'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';  

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>  
     <Navbar fixed='top' bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="me-4">Vijay Blog</Navbar.Brand> {/* Adding margin-right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {Nav_links.map((Element)=>{
            return(
              <>
                <Nav.Link href={Element.path}>{Element.display}</Nav.Link>
              </>
            )
          })}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>  
  );
};

export default Header;
