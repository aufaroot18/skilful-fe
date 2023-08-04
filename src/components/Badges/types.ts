import type { MouseEvent } from "react";

export interface BadgesProps {
  selectedFilter: string;
  onFilterClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
