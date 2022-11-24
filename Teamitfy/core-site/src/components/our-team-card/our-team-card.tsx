import { Card, Col, Row, Container } from "react-bootstrap";
import { Twitter, Linkedin, Facebook } from "../../svg";
import { Title } from '../../ui';

import styles from './our-team-card.module.scss';

interface OurTeamItems {
  capt: string,
  name: string,
  prof: string
};

export const OurTeam = () => {
  const items: OurTeamItems[] = [
    {capt: "/images/mau.png" , name: "Maureen Hernandez" , prof: "Executive Officer"},
    {capt: "/images/emi.png" , name: "Emiliano Belvedere" , prof: "Technology Officer"},
    {capt: "/images/asdru.png" , name: "Asdrubal Suarez" , prof: "R&D Officer"},
    {capt: "/images/vivi.png" , name: "Viviana Zambrano" , prof: "Operations Officer"}
  ];
  return (
    <Container className={styles.container} >
      <Title titleText='Meet our Team' />
      <Row>
        {items.map(({ capt , name , prof }) => (
          <Col className='mb-3 col-12 col-md-6 col-lg-3'>
            <Card>
              <Card.Img variant="top" src={capt} />
              <Card.Body>
                <Card.Title className="text-center"> {name} </Card.Title>
                <Card.Text className="text-center"> {prof} </Card.Text>
              </Card.Body>
            </Card>
          </Col> 
        ))};
      </Row>
    </Container>
  );
};