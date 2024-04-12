"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { menuData } from "./data";

export function Menu() {
  return (
    <ul className="menu-text flex gap-10 xl:gap-[60px]">
      {menuData?.map((menu) => (
        <li key={menu?.id} className="menu-text">
          <Link href={menu?.url}>{menu?.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export function ResponsiveMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
      {showMenu ? (
        <div className="absolute right-0 top-10 h-fit w-60 rounded-md bg-[#F6F6F6] p-5 dark:bg-[#141313]">
          <ul className="menu-text flex flex-col gap-10 xl:gap-[60px]">
            {menuData?.map((menu) => (
              <li key={menu?.id} className="menu-text">
                <Link href={menu?.url}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
