import TodoProvider from "../context/todo/TodoContext";

import Layout from "../components/Layout/Layout";
import AddTodo from "../components/AddTodo/AddTodo";
import Todos from "../components/Todos/Todos";

import Title from "../presentations/Title";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <TodoProvider>
        <Title customClassName={styles.title}>Daftar Todos</Title>
        <AddTodo />
        <Todos />
      </TodoProvider>
    </Layout>
  );
};

export default Home;
