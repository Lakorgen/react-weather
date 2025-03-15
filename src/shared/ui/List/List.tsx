import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const List = ({ children }: Props) => {
  return <div className={styles.list}>{children}</div>;
};

export default List;
