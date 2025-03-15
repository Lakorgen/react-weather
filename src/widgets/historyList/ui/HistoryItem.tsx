import { IHistoryItem } from "@/shared/interfaces/types";
import { Link } from "react-router";
import Card from "@/shared/ui/Card/Card";

interface Props {
  item: IHistoryItem;
}

const HistoryItem = ({ item }: Props) => {
  return (
    <Card>
      <Link key={item.city} to={`/?city=${item.city}`}>
        <p style={{ fontWeight: "bold" }}>
          {item.city}: {item.temp}Cº
        </p>
        <p>{item.weather}</p>
        <p>{item.date}</p>
      </Link>
    </Card>
  );
};

export default HistoryItem;
