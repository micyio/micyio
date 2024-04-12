import { Button } from "./button.component";
import { Logo } from "./logo.component";
import { Menu } from "./menu.component";

export function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white py-2.5 dark:bg-[#030303]">
      <div className="container relative" id="home">
        <div className="mt-[10px] flex items-center justify-between">
          <Logo />
          <Menu />
          <Button />
        </div>
      </div>
    </div>
  );
}
