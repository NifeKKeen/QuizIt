import { NavigationList } from "./NavigationList";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img src={"./../../public/logo.png"} alt={"logo"} />
      </Link>
      <NavigationList />
    </header>
  );
}