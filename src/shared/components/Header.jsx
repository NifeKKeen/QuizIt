import NavigationList from "./NavigationList";

export default function Header() {
  return (
    <header>
      <img src={"./../../public/logo.png"} alt={"logo"} />
      <NavigationList />
    </header>
  );
}