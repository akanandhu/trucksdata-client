import React, { useState } from "react";
import { CompareModelInput } from "./CompareModelInputs";
import ComparePlusButton from "./ComparePlusButton";
import CompareInputSeperate from "./CompareSelectField";

const CompareFields = ({ item, vehicle, setVehicle }) => {
  const [vehicleId, setVehicleId] = useState("");
  return (
    <div className="d-flex gap-1 flex-column justify-center h-full compare_padding py-20 ">
      <div className="rounded-4">
        <ComparePlusButton index={item.index} vehicle={vehicle} />
      </div>
      <div className="rounded-4 ">
        <CompareInputSeperate
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          className="body-type"
          setVehicleId={setVehicleId}
        />
      </div>
      <div className="rounded-4 ">
        <CompareModelInput
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          vehicleId={vehicleId}
          className="vehicle-select"
        />
      </div>
    </div>
  );
};

export default CompareFields;
