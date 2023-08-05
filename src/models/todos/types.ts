export interface TodoType {
  _id: string;
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: TodoType[];
  loading: boolean;
  error: string;
  addTodo: (todo: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string, completed: boolean) => void;
}
