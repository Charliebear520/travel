import Header from "../../components/Header/Header";
import NearList from "../../components/NearList/NearList";
import PlaceList from "../../components/PlaceList/PlaceList";
import styles from "./home.module.css";
import { Row, Col } from "antd";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Row>
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
            <PlaceList />
            <NearList/>
          </Col>
        </Row>
      </div>
    </>
  );
}
