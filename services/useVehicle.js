import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";
import { useState } from "react";

async function getVehicleDetails(id) {
  const response = await axiosInstance.get(`vehicles/${id}`);
  return response;
}

export default function useVehicle(id,filter) {
    console.log("IIID ",filter?.id);
  return useQuery(
    ["vehicleDetails",id],
    ()=>getVehicleDetails(filter?.id),
    {
      staleTime: Infinity,
    //   enabled:!!id
    }
  );
}
