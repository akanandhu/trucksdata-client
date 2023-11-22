import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getVehicleData(id) {
  const response = await axiosInstance.get(`vehicles/${id}`);
  return response;
}

export default function useViewVehicle(id) {

  return useQuery(
    ["vehicleData",id],
    ()=>getVehicleData(id),
    {
      staleTime: Infinity,
      enabled: !!{id}
    }
  );
}
