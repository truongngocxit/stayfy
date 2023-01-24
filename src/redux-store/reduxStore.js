import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import bookingInfoReducer from "./bookingInfoSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    bookingInfo: bookingInfoReducer,
  },
});

export default reduxStore;
