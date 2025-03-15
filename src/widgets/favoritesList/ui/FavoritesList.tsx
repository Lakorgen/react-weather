import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import styles from "./styles.module.css";
import FavoritesItem from "./FavoritesItem";
import FetchWeather from "@/features/fetchWeather/ui/FetchWeather/FetchWeather";

const FavoritesList = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <>
      <CardsWrapper>
        <h3>Избранное</h3>
        <div className={styles.cards__inner}>
          {favorites.map((favorite) => (
            <FetchWeather
              key={favorite.name}
              keyword={favorite.name}
              render={(data) => (
                <FavoritesItem key={data.name} favorite={favorite} />
              )}
            />
          ))}
        </div>
      </CardsWrapper>
    </>
  );
};

export default FavoritesList;
