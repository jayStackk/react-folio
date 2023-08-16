
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import homePic from '../assets/Jmagheadshot.jpg'
import About from '../components/homepage/About';
import Type from '../components/homepage/Types';
import Particle from '../components/skillset/Particle';
import "../App.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> John Magpantay</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: 'center'}}>
              <img
                src={homePic}
                alt="home pic"
                className="img-fluid"
                style={{ maxWidth: '250px', maxHeight: "290px", borderRadius: '80px', marginTop:'50px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;