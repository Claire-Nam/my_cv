import { Col, Container, Row } from "react-bootstrap";

const Language: React.FC = () => {
  return (
    <Container>
      <Row className="ms-3">
        <Col md={4} className="project_body">
          <p className="project_body_name">일본어</p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">JLPT N1</p>
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">영어</p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">OPIc IH</p>
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name"></p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">IELTS Overall 6.0</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Language;
