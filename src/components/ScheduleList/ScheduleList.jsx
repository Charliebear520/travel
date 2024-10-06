import styles from "./schedule.module.css";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import { selectScheduleName } from "../redux/addToSchedule";

export default function ScheduleList() {
  const selectSchedule = useSelector(selectScheduleName) || [];
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Your Schedule List</h1>
        <Row className={styles.container}>
          {selectSchedule.map((schedule) => (

            <Col span={24} className={styles.col}>
              <ScheduleItem key={schedule.scheduleId} schedule={schedule} />
            </Col>
          ))}

        </Row>
      </div>
    </>
  );
}
