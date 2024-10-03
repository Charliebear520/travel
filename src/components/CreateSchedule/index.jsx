import { ConfigProvider, FloatButton, Button } from "antd";
import { useState } from "react";
import { CalendarFilled, PlusOutlined } from "@ant-design/icons";

import ScheduleModal from "../ScheduleModal";
import styles from "../CreateSchedule/createSchedule.module.css";
export default function CreateSchedule() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ConfigProvider
      >
        <div>
          <nav onClick={toggleOpen}>
            <FloatButton.Group>
              <Button
                icon={<PlusOutlined />}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 100, 150, 0.7) 0%, rgba(64, 212, 255, 0.7) 100%)",
                }}
                className={styles.button}
              />
            </FloatButton.Group>
          </nav>
          <ScheduleModal isOpen={isOpen} toggleModal={toggleOpen} />
        </div>
      </ConfigProvider>
    </>
  );
}
