import styles from "./favorite.module.css";
import { Row, Col } from "antd";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

export default function FavoriteList() {
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Your Favorite places</h1>
        <Row className={styles.container}>
          <Col span={24} className={styles.col}>
            <FavoriteItem />
          </Col>
        </Row>
      </div>
    </>
  );
}
