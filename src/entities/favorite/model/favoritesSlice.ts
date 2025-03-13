import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavorites {
  id: number;
  cities: [];
}

interface FavoritesState {
  favorites: [];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (
      state: FavoritesState,
      action: PayloadAction<IFavorites>
    ) => {
      state.favorites.push(action.payload);
    },
    
  },
});
