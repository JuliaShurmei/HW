import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../components/posts/posts";

export type InitialStateType = {
  liked: Array<PostType>;
};

const initialState: InitialStateType = {
  liked: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      //filter
      //   const result = state.liked.filter(
      //     (item) => item.id === action.payload.id
      //   );
      //   if (result.length > 0) {
      //   } else if (result.length === 0) {
      //     state.liked.push(action.payload);
      //   }

      //2
      //   const result = state.liked.some((item) => item.id === action.payload.id);
      //   !result && state.liked.push(action.payload);

      //3
      !state.liked.some((item) => item.id === action.payload.id) &&
        state.liked.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.liked = state.liked.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;