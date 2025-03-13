import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const Search = ({ keyword, setKeyword }: Props) => {
  const [inputValue, setInputValue] = useState(keyword);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setKeyword(inputValue.trim());
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите город..."
      />
    </div>
  );
};

export default Search;
