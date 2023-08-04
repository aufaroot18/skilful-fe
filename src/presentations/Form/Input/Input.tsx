import styles from "./Input.module.css";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const { placeholder = "", value, handleChange } = props;

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
