import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onclick: () => void;
}

const Button = ({ children, onclick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
