import { WeatherCity } from "@/entities/weather/WeatherCity";
import FetchWeather from "@/features/fetchWeather/ui/FetchWeather/FetchWeather";
import { Search } from "@/features/search";
import { ToggleFavoriteButton } from "@/features/toggleFavorite";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import { useSearchParams } from "react-router";

const WeatherCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("city") || "";
  // const { data, isLoading, isError } = useGetWeatherQuery(keyword, {
  //   skip: !keyword,
  // });

  const setKeyword = (city: string) => {
    setSearchParams(city ? { city } : {});
  };

  return (
    <CardsWrapper>
      <Search keyword={keyword} setKeyword={setKeyword} />
      {/* {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      {data && (
        <>
          <WeatherCity data={data} />
          <ToggleFavoriteButton data={data} />
        </>
      )} */}
      <FetchWeather
        keyword={keyword}
        render={(data) => (
          <>
            <WeatherCity data={data} />
            <ToggleFavoriteButton data={data} />
          </>
        )}
      />
    </CardsWrapper>
  );
};

export default WeatherCard;
