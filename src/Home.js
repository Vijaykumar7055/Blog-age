import React from "react";
import { Container, Button } from "react-bootstrap";
import Img1 from "../src/images/car2.jpg";
import "../src/Css/home.css";

const Home = () => {
  return (
    <section id="getStarted" className="">
      <img
        src={Img1}
        alt="none"
        className="startedImg"
      />
      <Container className="container" style={{ height: "100vh" }}>
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Collaborate with anyone you want, however you want.
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            LGR is an online creator marketplace that gives you the freedom to
            find collaboration opportunities, grow your brand, and learn from
            others.
          </p>
          <Button
            className="getStartedBtn"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="20"
            data-aos-duration="1000"
            easing="ease-in"
          >
            <strong>Get Started</strong> - It's free
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
