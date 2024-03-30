import { Button } from "./button.component";
import { Logo } from "./logo.component";
import { Menu } from "./menu.component";

export function Header() {
  return (
    <div className="container">
      <div className="mt-[50px] flex items-center justify-between">
        <Logo />
        <Menu />
        <Button />
      </div>
    </div>
  );
}
