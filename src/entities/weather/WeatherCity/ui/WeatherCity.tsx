import { IWeather } from "../../model/types";
import styles from "./styles.module.css";

interface Props {
  data: IWeather;
}

const WeatherCity = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.city}>
        {data.name}, {data.sys.country}
      </h2>
      <div className={styles.temp}>
        {data.main.temp}°C (Ощущается как {data.main.feels_like}°C)
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className={styles.weatherIcon}
        />
        <p className={styles.description}>{data.weather[0].description}</p>
      </div>

      <div className={styles.details}>
        <p className={styles.detailItem}>🌡 Мин: {data.main.temp_min}°C</p>
        <p className={styles.detailItem}>🌡 Макс: {data.main.temp_max}°C</p>
        <p className={styles.detailItem}>💨 Ветер: {data.wind.speed} м/с</p>
        <p className={styles.detailItem}>🧭 Направление: {data.wind.deg}°</p>
        <p className={styles.detailItem}>☁ Облачность: {data.clouds.all}%</p>
        <p className={styles.detailItem}>
          🌊 Давление: {data.main.pressure} hPa
        </p>
        <p className={styles.detailItem}>💧 Влажность: {data.main.humidity}%</p>
        <p className={styles.detailItem}>👀 Видимость: {data.visibility} м</p>
      </div>
    </div>
  );
};

export default WeatherCity;
