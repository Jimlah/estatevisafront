import axios from "axios";
import { getUser } from "./../utils/common";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    if (
      config.baseURL === "http://127.0.0.1:8000/api/" &&
      !config.headers.Authorization
    ) {
      const user = getUser();

      if (user) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
