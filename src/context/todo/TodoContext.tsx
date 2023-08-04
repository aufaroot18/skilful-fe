import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { TodoType } from "../../models/todos";

interface ContextValue {
  todos: TodoType[];
  loading: boolean;
  error: string;
  addTodo: (newTodo: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string, completed: boolean) => void;
}

const defaultValue = {
  todos: [],
  loading: true,
  error: "",
  addTodo: () => null,
  editTodo: () => null,
  deleteTodo: () => null,
  completeTodo: () => null,
};

export const TodoContext = createContext<ContextValue>(defaultValue);

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = (props: TodoProviderProps) => {
  const { children } = props;

  const [, setSearchParams] = useSearchParams();
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

  const editTodo = async (id: string, title: string) => {
    try {
      setLoading(true);
      await axios.put(
        `https://skilvul-be-production.up.railway.app/api/todos/${id}`,
        {
          title: title,
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
      setSearchParams("");
    }
  };

  const deleteTodo = async (id: string) => {
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

  const completeTodo = async (id: string, completed: boolean) => {
    try {
      setLoading(true);
      await axios.put(
        `https://skilvul-be-production.up.railway.app/api/todos/${id}`,
        {
          completed: !completed,
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
    completeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
