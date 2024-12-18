import axios from "axios";
import axiosInstance from "./Axios";

export async function getApiService (url:string){
try {
  const response = await axiosInstance.get(url)

  console.log('====================================');
  console.log(response.data);
  console.log('====================================');
  return response.data
  
} catch (error) {
  throw error
}
}