import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const itemsAction = itemSlice.actions;
export default itemSlice;
