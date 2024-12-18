import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL??"http://127.0.0.1:9000/api/v1",
  timeout: 10000,
});


export default axiosInstance;