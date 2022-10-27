import React from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdComp() {
  return (
    <Card>
      <div className="ad-container position-relative h-100 p-4">
        <span className="image-cover"></span>
        <div className="f-flex flex-column flex-auto position-relative">
          <h5 className="text-white">Build the future with us</h5>
          <p className="text-white">
            Don't miss the opportunity of working on the cutting-edge technology
            and the most futuristics projects
          </p>
          <a className="mt-auto mb-0 text-white">
            Read More
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ml-1" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default AdComp;
