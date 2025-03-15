import { useAppDispatch } from "@/app/appStore";
import { clearHistory } from "@/entities/history/model/historySlice";
import Button from "@/shared/ui/Button/Button";

const ClearHistory = () => {
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(clearHistory())}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
        />
      </svg>
    </Button>
  );
};

export default ClearHistory;
