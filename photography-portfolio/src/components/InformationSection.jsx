import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InformationSection = () => {
  return (
    <Container className="information-section">
      <Row>
        <Col lg="6" className="fs-7 px-3 font-weight-bold">
          <p>
            <span>
              I believe that through my photography, I can offer a different
              perspective on the world and show people that there is more to
              life than what meets the eye. My goal is to inspire people to see
              the world in a new light and to appreciate the beauty that
              surrounds us.
            </span>
          </p>
        </Col>
        <Col lg="6" className="px-3">
          <p>
            My mission is to provide my viewers with an alternative view of the
            world, one that is not often seen. I have had the opportunity to
            work on a number of photography projects, both personal and
            professional. I enjoy capturing moments and stories through my lens,
            and I am always striving to improve my skills. Below are some of the
            photography projects that I have been involved in:
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default InformationSection;
