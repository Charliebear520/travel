import styles from "./header.module.css";
import Logo from "../../assets/travel.png";
import PlaceBar from "../PlaceBar/PlaceBar";
import ScheduleBar from "../ScheduleBar/ScheduleBar";
import FavoriteBar from "../FavoriteBar/FavoriteBar";
import { Divider } from "antd";

export default function Header() {
  return (
    <>
      <div className={styles.container}> 
        <div className={styles.logobox}>
          <img src={Logo} alt="logo" width={"80px"} />
          <h1 className={styles.title}>Travel</h1>
          <Divider style={{ borderColor: "#ffffff" }} />
        </div>
        <div>
          <PlaceBar />
          <FavoriteBar />
          <ScheduleBar />
        </div>
      </div>
    </>
  );
}
