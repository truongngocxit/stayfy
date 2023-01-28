import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import bookingInfoReducer from "./bookingInfoSlice";
import activeUserReducer from "./activeUserSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    bookingInfo: bookingInfoReducer,
    activeUser: activeUserReducer,
  },
});

export default reduxStore;
