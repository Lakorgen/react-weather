import { ICity } from "@/shared/interfaces/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: ICity[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ICity>) => {
      state.favorites = state.favorites.filter(
        (city) => city.name !== action.payload.name
      );
      state.favorites.unshift(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    removeFromFavorites: (state, action: PayloadAction<ICity>) => {
      state.favorites = state.favorites.filter(
        (city) => city.name !== action.payload.name
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
