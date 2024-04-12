import { Button } from "./button.component";
import { Logo } from "./logo.component";
import { Menu, ResponsiveMenu } from "./menu.component";

export function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white py-2.5 dark:bg-[#030303]">
      <div className="container relative" id="home">
        <div className="mt-[10px] flex items-center justify-between">
          <Logo />
          <div className="hidden lg:block">
            <Menu />
          </div>
          <div className="hidden lg:block">
            <Button />
          </div>
          <div className="flex items-center gap-5 lg:hidden">
            <Button />
            <ResponsiveMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
