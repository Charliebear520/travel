import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { EnvironmentFilled } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";
import { ScheduleFilled } from "@ant-design/icons";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <EnvironmentFilled style={{ fontSize: "24px", color: "bisque" }} />
          <h1 className={styles.title}>Site</h1>
        </div>
      </NavLink>
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <HeartFilled style={{ fontSize: "24px", color: "bisque" }} />
          <h1 className={styles.title}>Favorite</h1>
        </div>
      </NavLink>
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <ScheduleFilled style={{ fontSize: "24px", color: "bisque" }} />
          <h1 className={styles.title}>Schedule</h1>
        </div>
      </NavLink>
    </div>
  );
}
