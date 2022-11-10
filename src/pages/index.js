import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import "./custom.css";
import Carousel from 'react-bootstrap/Carousel';
import m3 from './images/m3.png';
import m4 from './images/m3.png';
import m42 from './images/m42.webp';
import bmwLogo from './images/BMW.png';
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
          <h3 >M3</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={m42}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div class="car-slide">
          <h3>M4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>M4</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
</main>
      <Container fluid >
              <Row>
                <Col>
                <Figure>
      <Figure.Image
        width={300}
        height={180}
        alt="171x180"
        src={bmwLogo}
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
        width={300}
        height={180}
        alt="171x180"
        src={bmwLogo}
      />
                </Col>
              </Row>
            </Container>

            </body>
        </div>
    );
};
export default Home;