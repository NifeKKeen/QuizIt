import { NavigationList } from "./NavigationList";

export function Header() {
  return (
    <header>
      <img src={"./../../public/logo.png"} alt={"logo"} />
      <NavigationList />
    </header>
  );
}