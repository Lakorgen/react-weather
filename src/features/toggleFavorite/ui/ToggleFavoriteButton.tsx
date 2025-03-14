import { useAppDispatch, useAppSelector } from "@/app/appStore";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/entities/favorite/model/favoritesSlice";
import { ICity } from "@/shared/interfaces/types";
import Button from "@/shared/ui/Button/Button";

interface Props {
  data: ICity;
}

const ToggleFavoriteButton = ({ data }: Props) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();

  const isLiked = favorites.some((city) => city.name === data.name);
  const handleClick = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(data));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <Button onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={isLiked ? "gold" : "white"}
          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
        />
      </svg>
    </Button>
  );
};

export default ToggleFavoriteButton;
