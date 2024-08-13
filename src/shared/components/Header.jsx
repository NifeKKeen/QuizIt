import { NavigationList } from "@/shared/components/NavigationList";
import { Link } from "react-router-dom";
import logoImgSrc from "/public/logo.png";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={logoImgSrc} alt={"logo"} />
      </Link>
      <NavigationList />
    </header>
  );
}