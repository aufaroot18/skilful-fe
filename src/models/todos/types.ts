export interface TodoType {
  _id: string;
  title: string;
  completed: boolean;
}

export interface TodosType {
  todos: TodoType[];
}
