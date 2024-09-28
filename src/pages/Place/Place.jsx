import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import PlaceDetail from "../../components/PlaceDetail/PlaceDetail";
import places from "../../json/place.json";
import styles from "./place.module.css"
import { Row,Col } from "antd";


export default function Place() {
  const { placeId } = useParams();
  const place = places.find((x) => x.id === placeId);

  return (
    // <div>
    //   <Header />
    //   <PlaceDetail place={place} />
    // </div>
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col
          sm={{ span: 24 }}
          md={{ span: 6 }} /* 調整這裡的寬度 */
          lg={{ span: 4 }} /* 這裡維持不變 */
          className={styles.col_4}
        >
          <Header />
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 18 }} /* 對應調整這裡的寬度 */
          lg={{ span: 20 }} /* 擴展內容區域 */
          className={styles.col_16}
        >
          <PlaceDetail place={place} />
        </Col>
      </Row>
    </div>
  );
}
