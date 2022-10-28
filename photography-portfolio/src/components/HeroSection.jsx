import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const HeroSection = () => {
  return (
    <Container className="hero-section-container">
      <Row className="h-100">
        <Col
          xs
          md="8"
          className="d-flex flex-column justify-content-center text-start px-4"
        >
          <div className="mx-4">
            <h1>Photography Portfolio and My Projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="btns-wrapper">
              <a href="/">Read my blog</a>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </Col>
        <Col xs md="4">
          <div className="img-wrapper"></div>
        </Col>
      </Row>
    </Container>
  );
};
