import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import bookingInfoReducer from "./bookingInfoSlice";
import activeUserReducer from "./activeUserSlice";
import filterReducer from "./filterSlice";
import pageResizeReducer from "./pageResizeSlice";
import paginationCursorSlice from "./paginationCursorSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    bookingInfo: bookingInfoReducer,
    activeUser: activeUserReducer,
    filter: filterReducer,
    pageResize: pageResizeReducer,
    paginationCursor: paginationCursorSlice,
  },
});

export default reduxStore;
