import { useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getArticles() {
  const response = await axiosInstance.get("blog");
  return response;
}

export default function useGetArticles() {
  return useQuery(["articles"], getArticles, {
    staleTime: Infinity,
  });
}
