import { configureStore } from "@reduxjs/toolkit";
import searchQueryReducer from "./searchQuerySlice";
import searchRefsReducer from "./searchRefsSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchQueryReducer,
    refs: searchRefsReducer,
  },
});

export default reduxStore;
