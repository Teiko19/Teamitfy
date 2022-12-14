import { Col, Row, Card } from "react-bootstrap";
import { Container,  Title } from "../../ui";

import styles from './success-card.module.scss';

interface SuccesCardItems {
  typeClass: string,
  typeClassImg: string,
  nameLink: string,
  name: string
};


export const SuccessCard = () => {
  const items: SuccesCardItems[] = [
    { typeClass: styles.border_card, typeClassImg: styles.launching, nameLink: "/images/launching.png", name: "Projects Launched"},
    { typeClass: styles.border_card, typeClassImg: styles.happy, nameLink: "/images/happy-face.png", name: "Happy customers"},
    { typeClass: "", typeClassImg: styles.target, nameLink: "/images/target.png", name: "Applications planned"}
  ];
  return (
      <Container>
      <Title titleText={'We are obsessed with your success'} />
      <Row className={`border ${styles.container}`}>
        {items.map(({ typeClass , typeClassImg , nameLink , name }) => (
            <>
              <Col xs={12} md={4} className={`mb-4 ${styles.image_container} ${typeClass}`}>
                <div className={`d-flex align-items-center justify-content-center flex-column`}>
                  <img
                    className={`img-fluid ${styles.images} ${typeClassImg}`}
                    src={nameLink}
                    alt="launching"
                  />
                <h3>100+</h3>
                <Card.Text>{name}</Card.Text>
              </div>
              </Col>
            </>
          ))};
      </Row>
    </Container>
  );
};