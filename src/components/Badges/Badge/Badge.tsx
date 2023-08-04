import styles from "./Badge.module.css";
import type { BadgeProps } from "./types";

const Badge = (props: BadgeProps) => {
  const { title, selectedFilter, onFilterClick } = props;

  const isActive = title === selectedFilter ? styles.active : "";

  return (
    <button
      className={`${styles.button} ${isActive}`}
      type="button"
      value={title}
      onClick={onFilterClick}
    >
      {title}
    </button>
  );
};

export default Badge;
