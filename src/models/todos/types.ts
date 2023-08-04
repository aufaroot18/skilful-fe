export interface TodoType {
  _id: number;
  title: string;
  completed: boolean;
}

export interface TodosType {
  todos: TodoType[];
}
