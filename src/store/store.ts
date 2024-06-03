import { configureStore } from "@reduxjs/toolkit";
import { testApi } from "./testApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cardsReducer } from "./testSlice";

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    cards: cardsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>