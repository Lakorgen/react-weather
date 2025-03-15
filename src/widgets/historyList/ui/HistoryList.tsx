import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import { useSearchParams } from "react-router";
import { Search } from "@/features/search";
import HistoryItem from "./HistoryItem";
import List from "@/shared/ui/List/List";
import { ClearHistory } from "@/features/clearHistory";

const HistoryList = () => {
  const { history } = useAppSelector((state) => state.history);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("city") || "";

  const setKeyword = (city: string) => {
    setSearchParams(city ? { city } : {});
  };

  return (
    <CardsWrapper>
      <Search keyword={keyword} setKeyword={setKeyword} />
      {history.length > 0 ? (
        <List>
          {history
            .filter((item) =>
              item.city.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((item) => (
              <HistoryItem key={item.city} item={item} />
            ))}
        </List>
      ) : (
        <p>История пуста</p>
      )}
      <ClearHistory />
    </CardsWrapper>
  );
};

export default HistoryList;
