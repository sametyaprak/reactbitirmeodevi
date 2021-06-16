import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Carousel.css";

function carousel() {
  return (
    <div id="carousel">
      <Container>
        <Row>
          <Col className=" d-none d-md-block">
            <Carousel >
              <Carousel.Item interval={2000}>
                <img
                  className="photos"
                  src="https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="photos"
                  src="https://images.pexels.com/photos/2042108/pexels-photo-2042108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="photos"
                  src="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default carousel;
