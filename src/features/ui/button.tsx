"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

type TProps = {
  variant: "primary" | "outline" | "dynamic";
  className?: string;
  children: ReactNode;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  children,
  variant,
  isActive,
  ...rest
}: TProps) {
  let buttonClass = "";

  if (variant === "primary") {
    buttonClass =
      "h-12 rounded-[24px] bg-gradient-to-r from-primary to-deepOrange py-2 px-[20px] font-lato text-lg font-semibold text-white";
  } else if (variant === "outline") {
    buttonClass =
      "h-12 rounded-[24px] border border-primary px-[20px] py-2 font-lato text-lg font-semibold text-primary";
  } else if (variant === "dynamic") {
    buttonClass = `h-12 rounded-[24px] py-2 px-[30px] font-lato text-lg font-semibold text-white hover:bg-gradient-to-r from-primary hover:text-white to-deepOrange ${isActive === true ? "bg-gradient-to-r from-primary to-deepOrange text-white border border-primary" : "border border-primary text-primary"}`;
  }

  return (
    <button className={cn(buttonClass, className)} {...rest}>
      {children}
    </button>
  );
}
