import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import { Link } from "react-router";
import styles from "./styles.module.css";

const FavoritesList = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  console.log(favorites);

  return (
    <>
      <CardsWrapper>
        <h3>Избранное</h3>
        <ul className={styles.cards__inner}>
          {favorites.map((favorite) => {
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
          })}
        </ul>
      </CardsWrapper>
    </>
  );
};

export default FavoritesList;
