import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { myLogger } from "../logger";
import reduxLogger from "redux-logger";
import { favoriteReducer } from "../reducers/favoriteReducer";
import { postReducer } from "../reducers/postReducer";
import { stringReducer } from "../reducers/stringReducer";

export const store = configureStore({
  reducer: {
    string: stringReducer,
    post: postReducer,
    favorite: favoriteReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(reduxLogger),
});

console.log("STORE", store.getState());

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
