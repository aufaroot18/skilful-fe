import { useContext } from "react";

import { TodoContext } from "../context/todo/TodoContext";

/**
 * @pattern: Provider Pattern to use todo
 */
const useTodos = () => {
  const state = useContext(TodoContext);

  return state;
};

export default useTodos;
