import styles from "./favorite.module.css";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import Place from "../../pages/Place/Place";

export default function FavoriteList() {
  const favorite = useSelector((state) => state.favorites);
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Your Favorite places</h1>
        <Row className={styles.container}>
        {favorite.map((place) => (
          <Col key={place.id} span={24} className={styles.col}>
            <FavoriteItem place={place} />
          </Col>
        ))}

        </Row>
      </div>
    </>
  );
}
