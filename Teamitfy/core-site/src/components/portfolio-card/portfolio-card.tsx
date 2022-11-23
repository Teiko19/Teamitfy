import { Card, Col, Container, Row } from "react-bootstrap";
import { IosSvg, NodeJsSvg, ReactSvg, WeirdSvg } from "../../svg";
import { Title } from "../../ui";

export const Portfolio = () => (
  <Container>
    <Title titleText={'Our portfolio'} />
    <Row>
      <Col xs={12} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/images/ally-app.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4">Ally App</Card.Title>
            <IosSvg />
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} className="mb-3">
        <Card>
          <Card.Img variant="top" src="/images/knac.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4" >KNAC</Card.Title>
            <NodeJsSvg />
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/images/axelrist.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4" >AxelRist Finnancial</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xs={12} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/images/lymecommons.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4" >Lymecommons</Card.Title>
            <ReactSvg />
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/images/nihi.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4" >Nihi</Card.Title>
            <ReactSvg />
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src="/images/brique.png" />
          <Card.Body className="d-flex">
            <Card.Title className="me-4" >Brique</Card.Title>
            <WeirdSvg />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
