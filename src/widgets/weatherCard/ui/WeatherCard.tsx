import { WeatherCity } from "@/entities/weather/WeatherCity";
import { FetchWeather } from "@/features/fetchWeather";
import { Search } from "@/features/search";
import { ToggleFavoriteButton } from "@/features/toggleFavorite";
import CardsWrapper from "@/shared/ui/CardsWrapper/CardsWrapper";
import { useSearchParams } from "react-router";

const WeatherCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("city") || "";

  const setKeyword = (city: string) => {
    setSearchParams(city ? { city } : {});
  };

  return (
    <CardsWrapper>
      <Search keyword={keyword} setKeyword={setKeyword} />
      <FetchWeather
        city={keyword}
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
