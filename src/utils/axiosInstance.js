import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "api-header-key": "your-valid-api-key",
  },
});
