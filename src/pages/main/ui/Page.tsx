import { useGetWeatherQuery } from "@/entities/weather/api/weatherApi";
import styles from "./styles.module.css";
import { WeatherCity } from "@/entities/weather/WeatherCity";
import { Search } from "@/features/search";
import { useSearchParams } from "react-router";
const Page = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("city") || "";
  const { data, isLoading, isError } = useGetWeatherQuery(keyword, {
    skip: !keyword,
  });

  const setKeyword = (city: string) => {
    setSearchParams(city ? { city } : {});
  };

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <div className={styles.main__inner}>
        <div className={styles.card}>
          <Search keyword={keyword} setKeyword={setKeyword} />
          {keyword && !isError ? (
            <WeatherCity data={data} />
          ) : (
            <p>Город не найден</p>
          )}
        </div>
        <div className={styles.card}>
          <p>test</p>
        </div>
      </div>
    </>
  );
};

export default Page;
