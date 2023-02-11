import { createSlice } from "@reduxjs/toolkit";
import timeoutPromiseDelay from "../utils/timeoutPromiseDelay";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isIn: false,
    text: null,
    state: "successful",
  },
  reducers: {
    showNotification(state, action) {
      state.isIn = true;
      state.text = action.payload.text;
      state.state = action.payload.state;
    },
    hideNotification(state, action) {
      state.isIn = false;
      //state.text = null;
      //state.state = null;
    },
  },
});

export default notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;

export const showAndHideNotification = function ({ state, text, secs = 3 }) {
  return async function (dispatch) {
    dispatch(notificationActions.showNotification({ state, text }));

    await timeoutPromiseDelay(secs);

    dispatch(notificationActions.hideNotification());
  };
};

// successful
// failed
// warning
