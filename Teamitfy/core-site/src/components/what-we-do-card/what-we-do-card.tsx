import { Row, Col} from "react-bootstrap";
import { Container, Title } from "../../ui";
import { HeartbeatSvg, ServerSvg, WebDesignSvg, WebDevelopmentSvg, SandWatchSvg, NextSvg } from "../../svg";
import styles from './what-we-do.module.scss';
import { arrayBuffer } from "stream/consumers";

export const WhatWeDo = () => {
  const arrMax = [
    {rowProp: styles.row , 
      arr:  [
        {imageStyles: ``, propsComp: <WebDesignSvg fillColor="white"/>},
        {imageStyles: `${styles.image_container_middle}`, propsComp: <WebDevelopmentSvg color="white"/>},
        {imageStyles: ``, propsComp: <WebDevelopmentSvg />},
      ]},
    {rowProp: "",
      arr:  [
        {imageStyles: ``, propsComp: <HeartbeatSvg fillColor="white"/>},
        {imageStyles: `${styles.image_container_middle}`, propsComp: <ServerSvg color="white"/>},
        {imageStyles: ``, propsComp: <SandWatchSvg />}
      ]}
  ];
  return (
    <Container> 
      <Title titleText="What we do!" className={styles.title}/>
      {arrMax.map( ({rowProp, arr}) => (
        <Row className={rowProp}>
          {arr.map(({imageStyles , propsComp}) => (
            <Col xs={12} md={4} className={styles.column}>
              <div className={`bg-white d-flex flex-column align-items-center ${styles.card}`}>
                <div className={`${styles.image_container} ${imageStyles}`}>
                  {propsComp}
                </div>
                <h4>Website design</h4>
                <p>We are partnered with the best design studios, configured for an effortless collaboration among teams</p>
                <NextSvg />
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
};