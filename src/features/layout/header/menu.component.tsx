import Link from "next/link";
import { menuData } from "./data";

export function Menu() {
  return (
    <ul className="menu-text flex gap-[60px]">
      {menuData?.map((menu) => (
        <li key={menu?.id}>
          <Link href={menu?.url}>{menu?.name}</Link>
        </li>
      ))}
    </ul>
  );
}
