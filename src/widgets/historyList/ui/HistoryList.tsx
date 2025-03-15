import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import styles from "./styles.module.css";
import { useSearchParams } from "react-router";
import { Search } from "@/features/search";
import HistoryItem from "./HistoryItem";

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
        <div className={styles.cards__inner}>
          {history
            .filter((item) =>
              item.city.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((item) => (
              <HistoryItem key={item.city} item={item} />
            ))}
        </div>
      ) : (
        <p>История пуста</p>
      )}
    </CardsWrapper>
  );
};

export default HistoryList;
