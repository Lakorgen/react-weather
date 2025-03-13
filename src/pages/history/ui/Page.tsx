import { HistoryList } from "@/widges/historyList";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className={styles.main__inner}>
      <HistoryList />
    </div>
  );
};

export default Page;
