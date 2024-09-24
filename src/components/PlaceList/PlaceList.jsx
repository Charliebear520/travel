import PlaceItem from "../PlaceItem/PlaceItem";
import places from "../../json/place.json";
import styles from "./place.module.css";
import { Row, Col } from "antd";

export default function PlaceList() {
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Featured destinations</h1>
        <Row className={styles.container}>
          {places.map((place) => (
            <Col
              key={place.id}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <PlaceItem place={place} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
