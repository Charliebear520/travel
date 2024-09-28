import { useState } from "react";
import styles from "./header.module.css";
import Logo from "../../assets/travel.png";
import { Divider } from "antd";
import NavBar from "../NavBar";

export default function Header() {
  const [isShrink, setIsShrink] = useState(true);

  return (
    <div
      className={`${styles.headerContainer} ${
        isShrink ? styles.shrink : styles.expand
      }`}
      onMouseEnter={() => setIsShrink(false)}
      onMouseLeave={() => setIsShrink(true)}
    >
      <div className={styles.logoBox}>
        <img src={Logo} alt="logo" className={styles.logo} />
        {!isShrink && <h1 className={styles.title}>Travel</h1>} {/* 只有在展開時顯示 title */}
        {!isShrink && <Divider className={styles.divider} />} {/* 只有在展開時顯示 divider */}
      </div>
      <NavBar isShrink={isShrink} />
    </div>
  );
}
