import styles from "./place.module.css";
import { Row, Col } from "antd";

export default function PlaceItem({ place }) {
  return (
    <>
      <Row>
        <Col className={styles.imagebox}>
          <img src={place.image} alt="placeinfo" width="100%" />
          <h2 className={styles.name}>{place.name}</h2>
        </Col>
      </Row>
    </>
  );
}
