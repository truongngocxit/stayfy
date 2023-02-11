import { createSlice } from "@reduxjs/toolkit";

const paginationCursorSlice = createSlice({
  name: "paginationCursor",
  initialState: {
    lastCursor: null,
  },
  reducers: {
    updateCursor(state, action) {
      state.lastCursor = action.payload;
    },
  },
});

export default paginationCursorSlice.reducer;
export const paginationCursorActions = paginationCursorSlice.actions;
