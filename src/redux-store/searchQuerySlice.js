import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "search",
  initialState: {
    lastCursor: null,
    hasReachedEnd: false,
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
    feature: null,
    filters: {
      typesOfStay: [],
      priceRange: {
        min: null,
        max: null,
      },
      facilities: [],
    },
  },
  reducers: {
    setQuerySearch(state, action) {
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
    changeFeature(state, action) {
      state.feature = action.payload;
      state.lastCursor = null;
      state.hasReachedEnd = false;
    },
    updateCursor(state, action) {
      state.lastCursor = action.payload;
    },
    changeFilters(state, action) {
      state.filters = action.payload;
      state.lastCursor = null;
      state.hasReachedEnd = false;
    },
    onHasReachedEnd(state) {
      state.hasReachedEnd = true;
    },
  },
});

export const searchQueryActions = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
