import { createSlice } from "@reduxjs/toolkit";

const searchRefsSlice = createSlice({
  name: "formFocus",
  initialState: {
    location: null,
    date: null,
    guestNum: null,
  },
  reducers: {
    assignLocationRef(state, action) {
      state.location = action.payload;
    },
    assignDateRef(state, action) {
      state.date = action.payload;
    },
    assignGuestNumRef(state, action) {
      state.guestNum = action.payload;
    },
    focusLocation(state) {
      state.location.current.focus();
    },
    focusDate(state) {
      state.date.current.focus();
    },
    focusGuestNum(state) {
      state.guestNum.current.click();
    },
  },
});

export const searchRefsActions = searchRefsSlice.actions;
export default searchRefsSlice.reducer;
