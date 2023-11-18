import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";
import { useState } from "react";

async function getVehicleDetails(id) {
  const response = await axiosInstance.get(`vehicles?vehicle_type=${id}`);
  return response;
}

export default function useVehicle(id) {

  return useQuery(
    ["vehicleDetails",id],
    ()=>getVehicleDetails(id),
    {
      staleTime: Infinity,
    //   enabled:!!id
    }
  );
}
