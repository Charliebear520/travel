import Header from "../../components/Header/Header";
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
            md={{ span: 24 }}
            lg={{ span: 4 }}
            className={styles.col_4}
          >
            <Header />
          </Col>
          <Col
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            className={styles.col_16}
          >
            <PlaceList />
          </Col>
        </Row>
      </div>
    </>
  );
}
