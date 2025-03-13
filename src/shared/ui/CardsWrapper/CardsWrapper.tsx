import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const CardsWrapper = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};

export default CardsWrapper;
