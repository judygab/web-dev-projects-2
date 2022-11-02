import React from "react";
import { ReactComponent as RightArrowIcon } from "../assets/icons/right-arrow-svgrepo-com.svg";

const NewsletterSection = () => {
  return (
    <div className="newsletter-section-container d-flex flex-column">
      <h1>
        <span>Curiosity,</span>
        <br></br>
        piqued.
      </h1>
      <div className="email-input">
        <input type="email" placeholder="Your Email"></input>
        <RightArrowIcon height={20} />
      </div>
      <p>
        Sign up to be the first to know about photo collection launches,
        promotions, and more.
      </p>
    </div>
  );
};

export default NewsletterSection;
