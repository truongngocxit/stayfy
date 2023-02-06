import { createSlice } from "@reduxjs/toolkit";

const pageResizeSlice = createSlice({
  name: "pageResize",
  initialState: {
    numOfListingColumns: 4,
    headerBufferHeight: 0,
  },
  reducers: {
    changeNumOfListingColumns(state, action) {
      state.numOfListingColumns = action.payload;
    },
    changeHeaderBufferHeight(state, action) {
      state.headerBufferHeight = action.payload;
    },
  },
});

export default pageResizeSlice.reducer;
export const pageResizeActions = pageResizeSlice.actions;
