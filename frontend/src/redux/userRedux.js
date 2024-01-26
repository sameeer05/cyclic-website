import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.message = 'Login Success';
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload;
      console.log(action.payload)
    },
    sendOtpSuccess: (state, action) => {
      state.isFetching = false;
      state.message = action.payload;
    },
    resetUser: (state) => {
      state.currentUser = null;
    },
    resetOthers: (state) => {
      state.isFetching = false;
      state.error = false;
      state.message = '';
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, sendOtpSuccess, resetUser, resetOthers } = userSlice.actions;
export default userSlice.reducer;