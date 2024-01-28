import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const BASE_URL = `${SERVER_URL}/api/`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${token}`,
    },
  });
};