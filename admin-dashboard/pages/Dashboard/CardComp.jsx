import React from "react";
import { Card, Row, Col } from "reactstrap";

function CardComp() {
  return (
    <>
      <Card className="overflow-hidden text-white bg-primary border-0 credit-card-container">
        <Row>
          <Col>
            <div>
              <p className="font-weight-normal">Name</p>
              <p className="font-weight-bold">Tony</p>
            </div>
            <div className="pt-1">
              <p className="font-weight-normal">Card Number</p>
              <p>4642 3489 9867</p>
            </div>
            <div className="pt-2 d-flex justify-content-between">
              <div>
                <p className="font-weight-normal">Valid</p>
                <p className="font-weight-bold">11/15</p>
              </div>
              <div>
                <p className="font-weight-normal">Expiry</p>
                <p className="font-weight-bold">03/25</p>
              </div>
              <div>
                <p className="font-weight-normal">CVV</p>
                <p className="font-weight-bold">...</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardComp;
