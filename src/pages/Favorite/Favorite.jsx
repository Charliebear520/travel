import Header from "../../components/Header/Header";
import styles from "./favorite.module.css"
import { Row,Col } from "antd";

export default function Favorite() {
  return (
    <>
      <div className={styles.container}>
        <Row>
          <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 4 }}>
            <Header />
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 20 }}>
            <h1>This is Favorite Page</h1>
          </Col>
        </Row>
      </div>
    </>
  );
}
