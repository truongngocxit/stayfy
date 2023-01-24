import { createSlice } from "@reduxjs/toolkit";

const bookingInfoSlice = createSlice({
  name: "bookingInfo",
  initialState: {
    roomInfo: {
      name: "",
      img: null,
      rooms: [],
      review: null,
      location: "",
      date: {
        start: null,
        end: null,
      },
      guests: {
        adults: 0,
        children: 0,
        babies: 0,
        animals: 0,
      },
    },
    guestInfo: null,
  },
  reducers: {
    addRoomInfo(state, action) {
      state.roomInfo = action.payload;
    },
    addGuestInfo(state, action) {
      state.guestInfo = action.payload;
    },
  },
});

export const bookingInfoActions = bookingInfoSlice.actions;
export default bookingInfoSlice.reducer;
