import type { FormEvent } from "react";

export interface InputProps {
  placeholder?: string;
  value: string;
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
}
