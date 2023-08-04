import { useState, useMemo } from "react";
import type { MouseEvent } from "react";

import type { FilterType } from "../../../models/filter";
import type { TodoType } from "../../../models/todos";

interface Deps {
  todos: TodoType[];
}

const useFilterTodos = (deps: Deps) => {
  const { todos } = deps;

  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const handleFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const filterValue = event.currentTarget.value as FilterType;
    setSelectedFilter(filterValue);
  };

  const filterTodos = useMemo(() => {
    if (selectedFilter === "all") {
      return [...todos];
    }
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    if (selectedFilter === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    return [];
  }, [selectedFilter, todos]);

  return {
    selectedFilter,
    filterTodos,
    handleFilter,
  };
};

export default useFilterTodos;
