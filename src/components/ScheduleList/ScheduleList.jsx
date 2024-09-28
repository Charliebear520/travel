import styles from "./schedule.module.css";
import { Row, Col } from "antd";
import ScheduleItem from "../ScheduleItem/ScheduleItem";

export default function ScheduleList() {
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Your Schedule List</h1>
        <Row className={styles.container}>
          <Col span={24} className={styles.col}>
            <ScheduleItem />
          </Col>
        </Row>
      </div>
    </>
  );
}
