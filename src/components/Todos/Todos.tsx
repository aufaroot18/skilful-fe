import useTodos from "../../hooks/useTodos";

import Title from "../../presentations/Title/Title";

import Badges from "../Badges";

import Todo from "./Todo";
import useFilterTodos from "./usecase/use-filter-todos";
import styles from "./Todos.module.css";

const Todos = () => {
  const { error, loading, todos } = useTodos();

  const { filterTodos, selectedFilter, handleFilter } = useFilterTodos({
    todos,
  });

  if (error) {
    return <Title>Error: {error}</Title>;
  }

  if (loading) {
    return <Title>Loading...</Title>;
  }

  return (
    <ul className={styles.todos}>
      <Badges selectedFilter={selectedFilter} onFilterClick={handleFilter} />
      {filterTodos.map((todo) => (
        <Todo
          key={todo._id}
          title={todo.title}
          id={todo._id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default Todos;
