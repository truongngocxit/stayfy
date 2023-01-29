import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState: {
    isActive: false,
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    profileImage: "",
    upcomingTrips: [],
    id: "",
    password: "",
  },
  reducers: {
    userLogin(state, action) {
      console.log(action.payload);
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
      state.lastName = "";
      state.firstName = "";
      state.id = "";
      state.email = "";
      state.phone = "";
      state.profileImage = "";
      state.upcomingTrips = [];
    },
    changeUserImage(state, action) {
      state.profileImage = action.payload;
    },
  },
});

export const activeUserActions = activeUserSlice.actions;
export default activeUserSlice.reducer;
