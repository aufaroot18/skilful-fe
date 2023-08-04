import { useSearchParams } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import useTodos from "../../../hooks/useTodos";

import styles from "./Todo.module.css";
import type { TodoProps } from "./types";

const Todo = (props: TodoProps) => {
  const { completed, id, title } = props;

  const [, setSearchParams] = useSearchParams();
  const { completeTodo, deleteTodo } = useTodos();

  const renderTitle = completed ? <s>{title}</s> : title;

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleEditTodo = () => {
    setSearchParams({ id: `${id}`, title: title });
  };

  const handleCompleteTodo = () => {
    completeTodo(id, completed);
  };

  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        onChange={handleCompleteTodo}
        checked={completed}
      />
      {renderTitle}
      <i className={styles.icon} onClick={handleEditTodo}>
        <FaPencilAlt />
      </i>
      <i className={styles.icon} onClick={handleDeleteTodo}>
        <FaTrashAlt />
      </i>
    </li>
  );
};

export default Todo;
