import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import FavoritesItem from "./FavoritesItem";
import { FetchWeather } from "@/features/fetchWeather";
import List from "@/shared/ui/List/List";

const FavoritesList = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <>
      <CardsWrapper>
        <h3>Избранное</h3>
        <List>
          {favorites.map((favorite) => (
            <FetchWeather
              key={favorite.name}
              city={favorite.name}
              render={(data) => (
                <FavoritesItem key={data.name} favorite={favorite} />
              )}
            />
          ))}
        </List>
      </CardsWrapper>
    </>
  );
};

export default FavoritesList;
