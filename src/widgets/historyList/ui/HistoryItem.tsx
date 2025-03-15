import { IHistoryItem } from "@/shared/interfaces/types";
import styles from "./styles.module.css";
import { Link } from "react-router";

interface Props {
  item: IHistoryItem;
}

const HistoryItem = ({ item }: Props) => {
  return (
    <Link key={item.city} to={`/?city=${item.city}`} className={styles.card}>
      <p style={{ fontWeight: "bold" }}>
        {item.city}: {item.temp}Cº
      </p>
      <p>{item.weather}</p>
      <p>{item.date}</p>
    </Link>
  );
};

export default HistoryItem;
