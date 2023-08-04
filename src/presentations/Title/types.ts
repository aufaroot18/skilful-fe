import type { ReactNode } from "react";

type Level = "1" | "2" | "3" | "4" | "5" | "6";

export interface TitleProps {
  level?: Level;
  customClassName?: string;
  children: ReactNode;
}
