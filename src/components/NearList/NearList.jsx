import NearItem from "../NearItem/NearItem";
import nearbys from "../../json/nearby.json";
import styles from "./near.module.css";
import { Row, Col } from "antd";

export default function NearList() {
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Popular trips near you</h1>
        <Row className={styles.container}>
          {nearbys.map((nearby) => (
            <Col
              key={nearby.id}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <NearItem nearby={nearby} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
