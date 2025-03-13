import { useAppSelector } from "@/app/appStore";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import styles from "./styles.module.css";
import { Link, useSearchParams } from "react-router";
import { Search } from "@/features/search";

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
              <Link to={`/?city=${item.city}`} className={styles.card}>
                <p style={{ fontWeight: "bold" }}>
                  {item.city}: {item.temp}Cº
                </p>
                <p>{item.weather}</p>
                <p>{item.date}</p>
              </Link>
            ))}
        </div>
      ) : (
        <p>История пуста</p>
      )}
    </CardsWrapper>
  );
};

export default HistoryList;
