import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Jelena Köhler </span>
            
            <br /> Got the <span className="purple">M.Sc. degree</span> in Astroparticle Physics from Bergische Universität Wuppertal (BUW).
            <br /> Currently, a <span className="purple">Ph.D. candidate</span> at Karlsruhe Institute of Technology (KIT).
            <br />
            <br />
            I work in an experiment called
            <a href="https://grand.cnrs.fr/" target="_blank" rel="noopener noreferrer" className="purple"> GRAND</a>.
            <br /> My main task is to develop the <span className="purple">Autonomous Radio Trigger</span>.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "..."{" "}
          </p>
          <footer className="blockquote-footer">Mark Twain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

