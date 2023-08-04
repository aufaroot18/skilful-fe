import styles from "./Footer.module.css";
import type { FooterProps } from "./types";

const Footer = (props: FooterProps) => {
  const { children } = props;

  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
