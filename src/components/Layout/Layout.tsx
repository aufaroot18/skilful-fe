import { isValidElement } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import styles from "./Layout.module.css";
import type { LayoutProps } from "./types";

const Layout = (props: LayoutProps) => {
  const { children } = props;

  if (!isValidElement(children)) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Header>Todo App</Header>
      <main>{children}</main>
      <Footer>Created by @aufaroot18</Footer>
    </div>
  );
};

export default Layout;
