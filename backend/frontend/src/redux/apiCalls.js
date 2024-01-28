import { loginFailure, loginStart, loginSuccess, sendOtpSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

export const sendEmailOtp = async (dispatch, email) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/send-email-otp", email);
    dispatch(sendOtpSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure(err.response.data));
  }
};

export const editUserDetails = async (dispatch, userId, token, newDetails) => {
  const axiosInstance = userRequest(token);
  try {
    const res = await axiosInstance.put(`/users/${userId}`, newDetails);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addAddress = async (dispatch, userId, token, address) => {
  const axiosInstance = userRequest(token);
  try {
    const res = await axiosInstance.post(`/users/add-address/${userId}`, address);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const editAddress = async (dispatch, userId, token, addressIndex, updatedAddress) => {
  const axiosInstance = userRequest(token);
  try {
    const res = await axiosInstance.put(`/users/edit-address/${userId}`, {addressIndex, updatedAddress});
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteAddress = async (dispatch, userId, token, addressIndex) => {
  const axiosInstance = userRequest(token);
  try {
    const res = await axiosInstance.delete(`/users/delete-address/${userId}`, addressIndex);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};