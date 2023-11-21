import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://i-tube.onrender.com",
});

export default axiosInstance;