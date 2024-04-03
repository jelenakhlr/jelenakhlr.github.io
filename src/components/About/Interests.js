import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAtom, SiHurriyetemlak } from "react-icons/si";
import {DiPython} from "react-icons/di";
import { FaCamera, FaCode } from "react-icons/fa";


function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
          <h2> Science </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
          <h2> Coding </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <h2> Python </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCamera />
          <h2> Photography </h2>
      </Col>
    </Row>
  );
}

export default Interests;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";
//
// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }
//
// export default Toolstack;
