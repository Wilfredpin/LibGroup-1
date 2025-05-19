import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Frame56 from "../Images/Frame 56.png";
import Frame50 from "../Images/Frame 50.png";
import Frame54 from "../Images/Frame 54.png";

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Frame56} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Frame50} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Frame54} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
