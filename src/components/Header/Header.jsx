import styles from "./header.module.css";
import Logo from "../../assets/travel.png";
import { Divider } from "antd";
import NavBar from "../NavBar";

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
          <NavBar/>
        </div>
      </div>
    </>
  );
}
