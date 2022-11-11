import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import "./custom.css";
import Carousel from 'react-bootstrap/Carousel';
import m3 from './images/m3.png';
import m4 from './images/m3.png';
import typeR from './images/HondatypeR2.png';
import bmwLogo from './images/BMW.png';
import hondaLogo from './images/honda-logo1.jpg';
import toyotaLogo from './images/toyota-logo1.jpg'
import porscheLogo from './images/porsche-logo.png'

const Home = () => {
    return (
        <div>
            <title>Home | Contuso</title>
            <body>
              <main>
              <Carousel>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={m3}
          alt="First slide"
        />
        <Carousel.Caption >
          <div class="car-slide">
          <h3 > BMW M3</h3>
          <p>Fast</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={typeR}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div class="car-slide">
          <h3>Honda Type R</h3>
          <p>Fast</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={m4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div class="car-slide">
          <h3>BMW M4</h3>
          <p>
          Fast
          </p>
        </div>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
</main>
      <div className="front-page">
        <h2>Constuso</h2>
        <h3>#1 - Online Auto Dealership on the Internet</h3>
      </div>
      <Container fluid >
              <Row>
                <Col>
                <Figure>
      <Figure.Image

        
        src={hondaLogo}  
    
        width={400}
        height={180}
        alt="171x180"
      />
    </Figure>
                </Col>
                <Col>
                <Figure.Image
        width={300}
        height={180}
        alt="171x180"
        src={bmwLogo}
      />
                </Col>
                <Col>
                <Figure.Image
        width={320}
        height={180}
        alt="171x180"
        src={toyotaLogo}
      />
                </Col>
                <Col>
                <Figure.Image
        width={300}
        height={180}
        alt="171x180"
        src={porscheLogo}
      />
                </Col>
              </Row>
            </Container>

            </body>
        </div>
    );
};
export default Home;