import { ModeToggle } from "@/components/mode-toggle";
import { ReactNode } from "react";

export const MenuBar = () => {
  return (
    <header className="w-full h-56 flex justify-between items-center border">
      <span>login</span>
      <ModeToggle />
    </header>
  );
};
