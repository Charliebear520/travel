import { Link } from "react-router-dom";
import styles from "./place.module.css";
import { Row, Col } from "antd";

export default function PlaceItem({ place }) {
  return (
    <>
      <Row>
        <Col className={styles.imagebox}>
          <Link to={`/places/id/${place.id}`}>
            <img src={place.image} alt="placeinfo" width="100%" />
          </Link>
          <h2 className={styles.name}>{place.name}</h2>
        </Col>
      </Row>
    </>
  );
}
