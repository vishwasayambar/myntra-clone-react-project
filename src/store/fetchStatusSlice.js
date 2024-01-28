import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
        state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
       state.currentlyFetching = true;
    },
    markFetchingEnd: (state) => {   
       state.currentlyFetching = false;
    },
  },
});

export const fetchStatusSliceAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
