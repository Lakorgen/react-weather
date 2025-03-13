import { WeatherCard } from "@/widges/weatherCard";
import styles from "./styles.module.css";
import { FavoritesList } from "@/widges/favoritesList";

const Page = () => {
  return (
    <>
      <div className={styles.main__inner}>
        <WeatherCard />
        <FavoritesList />
      </div>
    </>
  );
};

export default Page;
