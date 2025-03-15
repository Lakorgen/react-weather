import { Link } from "react-router";
import { ICity } from "@/shared/interfaces/types";
import Card from "@/shared/ui/Card/Card";

interface Props {
  favorite: ICity;
}

const FavoritesItem = ({ favorite }: Props) => {
  return (
    <Card>
      <Link key={favorite.name} to={`/?city=${favorite.name}`}>
        <p style={{ fontWeight: "bold" }}>
          {favorite.name}: {favorite.main.temp}Cº
        </p>
      </Link>
    </Card>
  );
};

export default FavoritesItem;
