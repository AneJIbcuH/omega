import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyFormData } from "../models/models";

const LS_CARDS_KEY = 'localeStorageKeyOmegaCards'

type CardsState = {
  cards: MyFormData[];
};

const initialState: CardsState = {
  cards: JSON.parse(localStorage.getItem(LS_CARDS_KEY) ?? '[]'),
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<MyFormData>) {
      state.cards.push(action.payload);
      localStorage.setItem(LS_CARDS_KEY, JSON.stringify(state.cards))
    },
    deleteCard(state, action: PayloadAction<MyFormData>) {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
      localStorage.setItem(LS_CARDS_KEY, JSON.stringify(state.cards))
    },
  },
});

export const cardsActions = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
