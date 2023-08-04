import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { FormEvent } from "react";

import useTodos from "../../hooks/useTodos";

import { Input } from "../../presentations/Form";
import Button from "../../presentations/Button/Button";

import styles from "./AddTodo.module.css";

const AddTodo = () => {
  const { addTodo } = useTodos();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState("");

  const id = searchParams.get("id");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addTodo(input);
  };

  useEffect(() => {
    console.log(searchParams.get("id"));
  }, [searchParams]);

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
