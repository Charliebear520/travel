import { Link } from "react-router-dom";
import styles from "./near.module.css";
import { Row, Col } from "antd";

export default function NearItem({ nearby }) {
  return (
    <>
      <Row>
        <Col className={styles.imagebox}>
          <Link to={`/nearbys/id/${nearby.id}`}>
            <img src={nearby.image} alt="placeinfo" width="100%" className={styles.image}/>
          </Link>
          <h2 className={styles.name}>{nearby.name}</h2>
        </Col>
      </Row>
    </>
  );
}
