import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import bookingInfoReducer from "./bookingInfoSlice";
import activeUserReducer from "./activeUserSlice";
import notificationReducer from "./notificationSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    bookingInfo: bookingInfoReducer,
    activeUser: activeUserReducer,
    notification: notificationReducer,
  },
});

export default reduxStore;
