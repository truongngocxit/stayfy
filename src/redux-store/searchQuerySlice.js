import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    date: {
      start: null,
      end: null,
    },
    guestNum: {
      adults: 1,
      children: 0,
      babies: 0,
      animals: 0,
    },
  },
  reducers: {
    setQuerySearch(state, action) {
      console.log(action.payload);
      state.query = action.payload || null;
    },
    setDateSearch(state, action) {
      state.date = action.payload || null;
    },
    setGuestNum(state, action) {
      state.guestNum = action.payload || null;
    },
    resetSearchQuery(state, action) {
      state.query = "";
      state.date = {
        start: null,
        end: null,
      };
      state.guestNum = {
        adults: 1,
        children: 0,
        babies: 0,
        animals: 0,
      };
    },
  },
});

export const searchQueryActions = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
