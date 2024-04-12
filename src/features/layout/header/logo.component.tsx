import { ThemeSwitcher } from "@/features/theme-switch/theme-toggle.component";

export function Logo() {
  return (
    <div className="flex items-center justify-between space-x-10">
      <h1 className="heading-three ">Micyio</h1>
      <ThemeSwitcher />
    </div>
  );
}
