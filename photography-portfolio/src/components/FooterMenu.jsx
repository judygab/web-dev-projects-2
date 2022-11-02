import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterMenu = () => {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Our Client Stories</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h3>Support</h3>
          <ul>
            <li>
              <a href="/">Email: email@test.com</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Help & FAQs</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterMenu;
