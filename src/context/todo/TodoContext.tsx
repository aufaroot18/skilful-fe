import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { TodoType } from "../../models/todos";

interface ContextValue {
  todos: TodoType[];
  loading: boolean;
  error: string;
  addTodo: (newTodo: string) => void;
  editTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const defaultValue = {
  todos: [],
  loading: true,
  error: "",
  addTodo: () => null,
  editTodo: () => null,
  deleteTodo: () => null,
};

export const TodoContext = createContext<ContextValue>(defaultValue);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = (props: TodoProviderProps) => {
  const { children } = props;

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodo = async () => {
    try {
      setLoading(true);
      const response = await axios(
        "https://skilvul-be-production.up.railway.app/api/todos"
      );

      if (response.status === 200) {
        setTodos(response.data.data);
      } else {
        throw new Error(`Something error: ${response.statusText}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (newTodo: string) => {
    try {
      setLoading(true);
      await axios.post(
        "https://skilvul-be-production.up.railway.app/api/todos",
        {
          title: newTodo,
        }
      );

      await fetchTodo();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  const editTodo = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          id: id,
          title: `Edit Todo ${id}`,
          body: `Edit Todo ${id}`,
          userId: 1,
        }
      );

      setTodos([...todos, response.data]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      setLoading(true);

      await axios.delete(
        `https://skilvul-be-production.up.railway.app/api/todos/${id}`
      );

      await fetchTodo();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const contextValue = {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
