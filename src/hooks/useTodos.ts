import { useContext } from "react";

import { TodoContext } from "../context/todo/TodoContext";
import type { TodoContextType } from "../models/todos";

/**
 * @pattern: Provider Pattern to use todo
 */
const useTodos = () => {
  const state = useContext(TodoContext) as TodoContextType;

  return state;
};

export default useTodos;
