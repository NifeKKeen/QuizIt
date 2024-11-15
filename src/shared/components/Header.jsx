import { NavigationList } from "@/shared/components/NavigationList";
import { Link } from "react-router-dom";
import logoImgSrc from "/public/logo.png";
import styles from "./Header.module.sass";

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logoImgSrc} alt={"logo"} className={styles.logoImg} />
        </Link>
      </div>
      <NavigationList direction={"horizontal"} />
    </header>
  );
}