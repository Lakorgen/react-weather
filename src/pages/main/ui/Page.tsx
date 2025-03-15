import { WeatherCard } from "@/widgets/weatherCard";
import styles from "./styles.module.css";
import { FavoritesList } from "@/widgets/favoritesList";

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
