import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState: {
    isActive: false,
    lastName: null,
    firstName: null,
    email: null,
    phone: null,
    profileImage: null,
    upcomingTrips: [],
    id: null,
    password: null,
  },
  reducers: {
    userLogin(state, action) {
      const { payload: userInfo } = action;
      state.isActive = true;
      state.lastName = userInfo.lastName;
      state.firstName = userInfo.firstName;
      state.email = userInfo.email;
      state.phone = userInfo.phone;
      state.id = userInfo.id;
      state.password = userInfo.password;
      state.profileImage =
        userInfo.profileImage ||
        "https://firebasestorage.googleapis.com/v0/b/stayfy-d4fc1.appspot.com/o/misc%2Fplaceholder-profile-image.png?alt=media&token=d7ee83a6-7b08-49e1-9d75-14de009335c9";
      state.upcomingTrips = userInfo.upcomingTrips || [];
    },
    userLogout(state, action) {
      state.isActive = false;
      state.lastName = null;
      state.firstName = null;
      state.id = null;
      state.email = null;
      state.phone = null;
      state.profileImage = null;
      state.upcomingTrips = [];
    },
    changeUserImage(state, action) {
      state.profileImage = action.payload;
    },
    addTrip(state, action) {
      state.upcomingTrips.push(action.payload);
    },
    removeTrip(state, action) {
      state.upcomingTrips = state.upcomingTrips.filter(
        (trip) => trip.bookingId !== action.payload
      );
    },
  },
});

export const activeUserActions = activeUserSlice.actions;
export default activeUserSlice.reducer;
