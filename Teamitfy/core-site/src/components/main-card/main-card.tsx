import { Row, Col } from "react-bootstrap";
import { Container, Button } from "../../ui";
import styles from './main-card.module.scss';

export const MainCard = () => (
  <Container className={styles.main}>
    <Row className="flex-column-reverse flex-lg-row align-items-center">
      <Col className="col-xs-12 col-lg-7">
        <h1 className={`h1 mb-lg-5 font-weight-bold text-center text-lg-start`}>You make important decisions, we make sure the systems back you up!</h1>
        <p className={`mb-lg-4 text-center text-sm-start pe-4`}>We know it's not easy to invest in a IT department. We have taken all of our experience and put it in service of dedicated companies that just need someone to do the work right.</p>
        <div className='d-flex justify-content-center justify-content-lg-start w-100'>
          <Button className={`btn-primary bg-gradient pe-5 ps-5 ${styles.button}`}>
            Let's Talk!
          </Button>
        </div>
      </Col>
      <Col className="col-xs-12 col-lg-5 d-flex justify-content-center justify-content-lg-end pb-4 p-lg-0">
        <img
          className="img-fluid"
          src="/images/main-card.png"
          alt="Picture of the author"
        />
      </Col>
    </Row>
  </Container>
)
