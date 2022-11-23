import { Row, Col} from "react-bootstrap";
import { Container, Title } from "../../ui";
import { HeartbeatSvg, ServerSvg, WebDesignSvg, WebDevelopmentSvg, SandWatchSvg, NextSvg } from "../../svg";

import styles from './what-we-do.module.scss';

export const WhatWeDo = () => (
  <Container>
    <Title titleText="What we do!" className={styles.title}/>
    <Row className={styles.row}>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={styles.image_container}>
              <WebDesignSvg fillColor="white"/>
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={`${styles.image_container} ${styles.image_container_middle}`}>
              <WebDevelopmentSvg color="white"/>
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={styles.image_container}>
              <WebDevelopmentSvg />
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={styles.image_container}>
              <HeartbeatSvg fillColor="white"/>
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={`${styles.image_container} ${styles.image_container_middle}`}>
              <ServerSvg color="white"/>
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.column}>
          <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
            <div className={styles.image_container}>
              <SandWatchSvg />
            </div>
            <h4>Website design</h4>
            <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
            <NextSvg />
          </div>
        </Col>
      </Row>
  </Container>
);
