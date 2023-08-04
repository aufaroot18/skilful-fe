import Title from "../../presentations/Title/Title";

import styles from "./Header.module.css";
import type { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <Title level="1" customClassName={styles.header}>
      {children}
    </Title>
  );
};

export default Header;
