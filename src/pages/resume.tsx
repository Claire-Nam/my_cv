import React from "react";
import Pinfo from "./part/personalInfo";
import Project from "./part/projects";
import Introduce from "./part/introduce";
import Work from "./part/work";
import Education from "./part/education";
import { Container } from "react-bootstrap";
import Language from "./part/laguage";

const Resume: React.FC = () => {
  return (
    <Container className="content">
      <Pinfo />
      <h2 className="ms-3 mb-2 mt-3 text-center" id="summary">
        Summary
      </h2>
      <hr className="hr"></hr>
      <Introduce />
      <p></p>
      <h2 className="ms-3 mb-2 mt-4 text-center" id="project">
        Projects
      </h2>
      <hr className="hr"></hr>
      <Project />
      <p></p>
      <h2 className="mb-2 mt-4 text-center" id="work">
        Work Experience
      </h2>
      <hr className="hr"></hr>
      <Work />
      <p></p>
      <h2 className="ms-3 mb-2 mt-4 text-center" id="education">
        Education
      </h2>
      <hr className="hr"></hr>
      <Education />
      <p></p>
      <h2 className="ms-3 mb-2 mt-4 text-center" id="language">
        Lauguage
      </h2>
      <hr className="hr"></hr>
      <Language />
      <p></p>
      <h2 className="ms-3 mb-2 mt-4 text-center" id="link">
        Portfolio Links
      </h2>
      <hr className="hr"></hr>

      <p></p>
    </Container>
  );
};

export default Resume;
