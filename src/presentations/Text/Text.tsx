import { TextProps } from "./types";

const Text = (props: TextProps) => {
  const { children } = props;

  return <p>{children}</p>;
};

export default Text;
