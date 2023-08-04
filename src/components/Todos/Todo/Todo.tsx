import { useSearchParams } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import useTodos from "../../../hooks/useTodos";

import styles from "./Todo.module.css";
import type { TodoProps } from "./types";

const Todo = (props: TodoProps) => {
  const { completed, id, title } = props;

  const [, setSearchParams] = useSearchParams();
  const { deleteTodo } = useTodos();

  const renderTitle = completed ? <s>{title}</s> : title;

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleEditTodo = () => {
    setSearchParams({ id: `${id}` });
  };

  const handleCompleteTodo = () => {
    console.log("## [Debug Mode] compete todo");
  };

  return (
    <li className={styles.todo}>
      <input type="checkbox" onClick={handleCompleteTodo} checked={completed} />
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
