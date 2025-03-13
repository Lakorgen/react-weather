import { addToHistory } from "@/entities/history/model/historySlice";
import { weatherApi } from "@/entities/weather/api/weatherApi";
import { Middleware } from "@reduxjs/toolkit";

export const weatherMiddleware: Middleware = (store) => (next) => (action) => {
  if (weatherApi.endpoints.getWeather.matchFulfilled(action)) {
    const { originalArgs } = action.meta.arg;
    const { weather, main } = action.payload;

    store.dispatch(
      addToHistory({
        city: originalArgs, 
        weather: weather[0].description,
        temp: main.temp,
        date: new Date().toLocaleString("ru-RU"),
      })
    );
  }
  return next(action);
};
