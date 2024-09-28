import { HeartFilled } from "@ant-design/icons";
import styles from "./place.module.css";
import { Row, Col, Button } from "antd";

export default function PlaceDetail({ place }) {
  return (
    <>
      <Row gutter={[32,32]} className={styles.row}>
        <Col lg={{ span: 8 }}>
          <img src={place.image} alt="placeinfo" width="100%" />
        </Col>
        <Col lg={{ span: 16 }}className={styles.col_16}>
          <Row className={styles.titlebox}>
            <Col>
              <h2 className={styles.name}>{place.name}</h2>
            </Col>
            <Col className={styles.colbox}>
              <Button icon={<HeartFilled/>}/>
              <Button>Add to Schedule</Button>
            </Col>
          </Row>
          <Row>
            <p className={styles.description}>{place.description}</p>
          </Row>
        </Col>
      </Row>
    </>
  );
}
