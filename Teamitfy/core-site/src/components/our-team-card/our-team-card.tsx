import { Card, Col, Row, Container } from "react-bootstrap";
import { Twitter, Linkedin, Facebook } from "../../svg";
import { Title } from '../../ui';

import styles from './our-team-card.module.scss';

export const OurTeam = () => (
  <Container className={styles.container} >
    <Title titleText='Meet our Team' />
    <Row>
      <Col className='mb-3 col-12 col-md-6 col-lg-3'>
        <Card>
          <Card.Img variant="top" src="/images/mau.png" />
          <Card.Body>
            <Card.Title className="text-center">Maureen Hernandez</Card.Title>
            <Card.Text className="text-center"> Executive Officer </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mb-3 col-12 col-md-6 col-lg-3'>
        <Card>
          <Card.Img variant="top" src="/images/emi.png" />
          <Card.Body>
            <Card.Title className="text-center">Emiliano Belvedere</Card.Title>
            <Card.Text className="text-center"> Technology Officer </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mb-3 col-12 col-md-6 col-lg-3'>
        <Card>
          <Card.Img variant="top" src="/images/asdru.png" />
          <Card.Body>
            <Card.Title className="text-center">Asdrubal Suarez</Card.Title>
            <Card.Text className="text-center"> R&D Officer</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mb-3 col-12 col-md-6 col-lg-3'>
        <Card>
          <Card.Img variant="top" src="/images/vivi.png" />
          <Card.Body>
            <Card.Title className="text-center">Viviana Zambrano</Card.Title>
            <Card.Text className="text-center"> Operations Officer </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
