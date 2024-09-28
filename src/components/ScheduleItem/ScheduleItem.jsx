import styles from "./schedule.module.css";
import Logo from "../../assets/travel.png";
import { DeleteTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { getTwoToneColor, setTwoToneColor } from "@ant-design/icons";

setTwoToneColor("#eb2f96");
getTwoToneColor(); // #eb2f96

export default function ScheduleItem() {
  return (
    <>
      <div className={styles.favoritebox}>
        <div className={styles.placebox}>
          <img src={Logo} alt="logo" width={"40px"} />
          <h2 className={styles.name}>Japan,Kyoto</h2>
        </div>
        <div>
          <h2 className={styles.date}>9/23-9/25</h2>
        </div>
      </div>
    </>
  );
}
