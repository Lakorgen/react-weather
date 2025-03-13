import { weatherApi } from "@/entities/weather/api/weatherApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
});
