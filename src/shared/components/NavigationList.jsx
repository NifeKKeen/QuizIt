import { NavLink } from "react-router-dom";
import styles from "./NavigationList.module.sass";

export function NavigationList({ direction = "horizontal"  }) {
  return (
    <nav className={styles.nav}>
      <ul className={direction === "horizontal" ? styles.horizontalUl : styles.verticalUl}>
        <li className={styles.horizontalUlLi}>
          <NavLink to={"/"} className={styles.horizontalUlLiA}>Home</NavLink>
        </li>
        <li className={styles.horizontalUlLi}>
          <NavLink to={"/about"} className={styles.horizontalUlLiA}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}