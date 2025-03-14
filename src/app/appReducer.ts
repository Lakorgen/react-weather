import { weatherApi } from "@/entities/weather/api/weatherApi";
import { combineReducers } from "@reduxjs/toolkit";
import historyReducer from "@/entities/history/model/historySlice";
import favoritesReducer from "@/entities/favorite/model/favoritesSlice";

export const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  history: historyReducer,
  favorites: favoritesReducer,
});
