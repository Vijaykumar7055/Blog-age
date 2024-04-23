import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import car2 from './images/car3.jpg'

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
      display: "Tour",
    },
  ];
  return (
    <div className="container-fluid box">
    <header className="header container-fluid">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ===========Logo============== */}
            <div className="logo">
              <img src={car2} alt="" />
            </div>

            {/* =============Logo End============ */}
            {/* =============Menu Start============ */}


            {/* =============Menu End============ */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
    </div>
  );
};

export default Header;
