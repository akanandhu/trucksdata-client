import axios from "axios";

// Set config defaults when creating the instance
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});
