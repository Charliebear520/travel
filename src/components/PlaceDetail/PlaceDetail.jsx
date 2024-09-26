import styles from "./place.module.css";
import { Row, Col, Button } from "antd";

export default function PlaceDetail({ place }) {
  return (
    <>
      <Row>
        <Col lg={{ span: 8 }}>
          <img src={place.image} alt="placeinfo" width="100%" />
        </Col>
        <Col lg={{ span: 16 }}>
          <Row>
            <Col>
              <h2 className={styles.name}>{place.name}</h2>
            </Col>
            <Col>
              <Button>Add to Schedule</Button>
            </Col>
          </Row>
          <Row>
            <p>{place.description}</p>
          </Row>
        </Col>
      </Row>
    </>
  );
}
