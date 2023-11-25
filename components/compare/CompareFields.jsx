import React, { useState } from "react";
import { CompareModelInput } from "./CompareModelInputs";
import ComparePlusButton from "./ComparePlusButton";
import CompareInputSeperate from "./CompareSelectField";

const CompareFields = ({ item, vehicle, setVehicle }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchModelValue, setSearchModelValue] = useState("");

  function handleClear() {
    setVehicle((prevVehicle) => {
      const updatedVehicle = prevVehicle.map((item) => {
        if (item.index === item.index) {
          return { ...item, vehicle: [] };
        } else {
          return item;
        }
      });
      return updatedVehicle;
    });
    setSearchValue("");
    setSearchModelValue("");
  }

  return (
    <div className="d-flex gap-1 flex-column justify-center h-full compare_padding py-20 ">
      <div className="rounded-4">
        <ComparePlusButton
          index={item.index}
          vehicle={vehicle}
          handleClear={handleClear}
        />
      </div>
      <div className="rounded-4 ">
        <CompareInputSeperate
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          className="body-type"
          setVehicleId={setVehicleId}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="rounded-4 ">
        <CompareModelInput
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          vehicleId={vehicleId}
          className="vehicle-select"
          searchModelValue={searchModelValue}
          setSearchModelValue={setSearchModelValue}
        />
      </div>
    </div>
  );
};

export default CompareFields;
