import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { useDispatch, useSelector } from "react-redux";
import { weatherApi } from "@/entities/weather/api/weatherApi";
import { weatherMiddleware } from "./appMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, weatherMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
