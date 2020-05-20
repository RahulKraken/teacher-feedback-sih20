import React from "react";
import { ReactComponent as Book } from "../svg/book.svg";
import { ReactComponent as Stars } from "../svg/stars.svg";
import { ReactComponent as Elements } from "../svg/elements.svg";
import { ReactComponent as Things } from "../svg/things.svg";

const Landing = () => {
  return (
    <div className="land">
      <div className="vects">
        <div className="objects">
          <Book id="book" />
          <Stars id="stars" />
          <Elements id="elements" />
          <Things id="things" />
        </div>
      </div>
      <div id="intro">
        <h1>A Feedback Platform for </h1>
        <h2>the betterment of Teaching standards</h2>
        <h3>in Educational Institutions.</h3>
        <p>A Smart India Hackathon Project.</p>
      </div>
    </div>
  );
};

export default Landing;
