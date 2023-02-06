import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import bookingInfoReducer from "./bookingInfoSlice";
import activeUserReducer from "./activeUserSlice";
import filterReducer from "./filterSlice";
import pageResizeReducer from "./pageResizeSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    bookingInfo: bookingInfoReducer,
    activeUser: activeUserReducer,
    filter: filterReducer,
    pageResize: pageResizeReducer,
  },
});

export default reduxStore;
