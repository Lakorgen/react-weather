import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
