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
    replaceGuestNum(state, action) {
      state.roomInfo.guests = action.payload;
    },
    replaceDate(state, action) {
      state.roomInfo.date = action.payload;
    },
    addRoomInfo(state, action) {
      state.roomInfo = action.payload;
    },
    addGuestInfo(state, action) {
      state.guestInfo = action.payload;
    },
    resetBookingInfo(state, action) {
      state.roomInfo = {
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
          adults: 1,
          children: 0,
          babies: 0,
          animals: 0,
        },
      };
      state.guestInfo = null;
    },
  },
});

export const bookingInfoActions = bookingInfoSlice.actions;
export default bookingInfoSlice.reducer;
