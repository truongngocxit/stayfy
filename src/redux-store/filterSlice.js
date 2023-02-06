import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    feature: null,
    facilities: [],
    type: {
      entire: false,
      private: false,
      shared: false,
    },
    range: {
      min: 0,
      max: 1000,
    },
  },
  reducers: {
    changeFeature(state, action) {
      state.feature = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
