import { IHistoryItem } from "@/shared/interfaces/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistoryState {
  history: IHistoryItem[];
}

const initialState: HistoryState = {
  history: JSON.parse(localStorage.getItem("history") || "[]"),
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<IHistoryItem>) => {
      state.history = state.history.filter(
        (city) => city.city !== action.payload.city
      );
      state.history.unshift(action.payload);
      localStorage.setItem("history", JSON.stringify(state.history));
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.setItem("history", JSON.stringify(state.history));
    },
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
