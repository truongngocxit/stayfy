import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    date: null,
    guestNum: null,
  },
  reducers: {
    setQuerySearch(state, action) {
      state.query = action.payload;
    },
    setDateSearch(state, action) {
      state.date = action.payload;
    },
    setGuestNum(state, action) {
      state.guestNum = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
