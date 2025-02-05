import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Nouman Faiz </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a Data Engineer at 10Pearls.
            <br />
            I have completed BS (Bachelors of Science) in Software Engineering from Superior University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Consulting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineering is magic wand which turns a dream into reality!"{" "}
          </p>
          <footer className="blockquote-footer">Faiz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
