import { NavLink } from "react-router-dom";
import styles from "./NavigationList.module.sass";

export function NavigationList({ direction = "horizontal"  }) {
  const ulClassName = (direction === "horizontal") ? styles.horizontalUl : styles.verticalUl,
        liClassName = (direction === "horizontal") ? styles.horizontalUlLi : styles.verticalUlLi;
  return (
    <nav className={styles.nav}>
      <ul className={ulClassName}>
        <li className={liClassName}>
          <NavLink to={"/"} className={styles.a}>Home</NavLink>
        </li>
        <li className={liClassName}>
          <NavLink to={"/about"} className={styles.a}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}