"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <div
        className={`flex w-14 items-center justify-between rounded-full border p-1 transition duration-1000 ease-in-out ${theme === "light" ? "pl-2" : "pr-2"}`}
      >
        {theme === "light" ? (
          <FaMoon className="text-primary  " size={14} />
        ) : (
          <FaSun className="text-primary  " size={14} />
        )}
        <div
          className={`h-5 w-5 rounded-full ${theme === "light" ? "order-last bg-black transition duration-1000 ease-in-out" : "order-first bg-white transition duration-300 ease-in-out"}`}
        />
      </div>
    </button>
  );
};
