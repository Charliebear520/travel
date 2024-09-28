import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { EnvironmentFilled, HeartFilled, ScheduleFilled } from "@ant-design/icons";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={styles.navContainer}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <div className={styles.icon}>
            <EnvironmentFilled style={{ fontSize: "24px", color: "bisque" }} />
          </div>
          {isExpanded && <h1 className={styles.title}>Site</h1>}
        </div>
      </NavLink>
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <div className={styles.icon}>
            <HeartFilled style={{ fontSize: "24px", color: "bisque" }} />
          </div>
          {isExpanded && <h1 className={styles.title}>Favorite</h1>}
        </div>
      </NavLink>
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? styles.navboxActive : styles.navbox
        }
      >
        <div className={styles.navItem}>
          <div className={styles.icon}>
            <ScheduleFilled style={{ fontSize: "24px", color: "bisque" }} />
          </div>
          {isExpanded && <h1 className={styles.title}>Schedule</h1>}
        </div>
      </NavLink>
    </div>
  );
}
