import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistoryItem {
  city: string;
  weather: string;
  temp: number;
  date: string;
}

interface HistoryState {
  history: HistoryItem[];
}

const initialState: HistoryState = {
  history: JSON.parse(localStorage.getItem("history") || "[]"),
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<HistoryItem>) => {
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
