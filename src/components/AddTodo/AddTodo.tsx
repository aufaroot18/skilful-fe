import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { FormEvent } from "react";

import useTodos from "../../hooks/useTodos";

import { Input } from "../../presentations/Form";
import Button from "../../presentations/Button/Button";

import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const { addTodo, editTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState("");

  const id = searchParams.get("id");
  const editTitle = searchParams.get("title");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    id ? editTodo(id, input) : addTodo(input);
    setInput("");
  };

  useEffect(() => {
    if (editTitle) {
      setInput(editTitle);
    }
  }, [editTitle, searchParams]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <Input
          placeholder="Add Todo"
          value={input}
          handleChange={handleInput}
        />
      </div>
      <div className={styles.button}>
        <Button type="submit">{id ? "Edit" : "Add"}</Button>
      </div>
    </form>
  );
};

export default AddTodo;
