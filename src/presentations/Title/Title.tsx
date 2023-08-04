import styles from "./Title.module.css";
import type { TitleProps } from "./types";

const Title = (props: TitleProps) => {
  const { level = "2", children, customClassName = "" } = props;

  const classNames = `${styles.title} ${customClassName}`;

  if (level === "1") {
    return <h1 className={classNames}>{children}</h1>;
  }

  if (level === "2") {
    return <h2 className={classNames}>{children}</h2>;
  }

  if (level === "3") {
    return <h3 className={classNames}>{children}</h3>;
  }

  if (level === "4") {
    return <h4 className={classNames}>{children}</h4>;
  }

  if (level === "5") {
    return <h5 className={classNames}>{children}</h5>;
  }

  if (level === "6") {
    return <h6 className={classNames}>{children}</h6>;
  }

  return null;
};

export default Title;
