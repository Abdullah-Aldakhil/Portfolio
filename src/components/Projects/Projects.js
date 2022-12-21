import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Soon... </strong>
        </h1>
      </Container>
    </Container>
  );
}

export default Projects;
