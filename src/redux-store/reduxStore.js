import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

const reduxStore = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default reduxStore;
