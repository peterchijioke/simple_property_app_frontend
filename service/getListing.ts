import axios from "axios";
import axiosInstance from "./Axios";

export async function getApiService (url:string){
try {
  const response = await axiosInstance.get(url)
  return response.data
} catch (error) {
  throw error
}
}