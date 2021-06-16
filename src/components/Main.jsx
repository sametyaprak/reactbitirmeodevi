import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import allData from "./Data";
import "./Main.css";

function CardWork(props) {
  const { ad, meslek, yorum, resim } = allData[props.id];
  const still = {
    width: "18rem", 
    height:"450px",
    display: "flex" 
  }
  return (
    <div>
      <Card style={still}>
        <div id="card-photo">
          <Card.Img  style={{ height:"250px" }} variant="top" src={resim} />
        </div>
        <Card.Body>
          <Card.Title>{ad}</Card.Title>
          <Card.Text>{meslek}</Card.Text>
          <Card.Text>{yorum}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Container fluid="xxl" className="text-center mt-4">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center mb-4" xs={12} md={6} xl={3}>
            <CardWork id="0" />
          </Col>
          <Col className="d-flex justify-content-center mb-4" xs={12} md={6} xl={3}>
            <CardWork id="1" />
          </Col>
          <Col className="d-flex justify-content-center mb-4" xs={12} md={6} xl={3}>
            <CardWork id="2" />
          </Col>
          <Col className="d-flex justify-content-center mb-4" xs={12} md={6} xl={3}>
            <CardWork id="3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Main;
