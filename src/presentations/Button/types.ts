import type { ReactNode } from "react";

export interface ButtonProps {
  type?: "button" | "submit";
  children: ReactNode;
}
