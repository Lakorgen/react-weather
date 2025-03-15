import { Link } from "react-router";
import styles from "./styles.module.css";
import { ICity } from "@/shared/interfaces/types";

interface Props {
  favorite: ICity;
}

const FavoritesItem = ({ favorite }: Props) => {
  return (
    <Link
      key={favorite.name}
      to={`/?city=${favorite.name}`}
      className={styles.card}
    >
      <p style={{ fontWeight: "bold" }}>
        {favorite.name}: {favorite.main.temp}Cº
      </p>
    </Link>
  );
};

export default FavoritesItem;
