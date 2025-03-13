import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => {
        return {
          url: "weather",
          params: {
            appid: API_KEY,
            q: city,
            lang: "ru",
            units: "metric",
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
