import type { ButtonProps } from "./types";

import styles from "./Button.module.css";

const Button = (props: ButtonProps) => {
  const { type = "button", children } = props;

  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
