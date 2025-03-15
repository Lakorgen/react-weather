import { useGetWeatherQuery } from "@/entities/weather/api/weatherApi";
import { ICity } from "@/shared/interfaces/types";
import React from "react";

interface Props {
  city: string;
  render: (data: ICity) => React.ReactNode;
}
const FetchWeather = ({ city, render }: Props) => {
  const { data, isLoading, isError } = useGetWeatherQuery(city, {
    skip: !city,
  });

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError || !data) {
    return (
      <p style={{ textAlign: "center" }}>
        Город не найден.
        <br />
        (Введите название города и нажмине Enter)
      </p>
    );
  }

  return render(data);
};

export default FetchWeather;
