import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";



const AxelFilter = ({ sideParams, setSideParams, options }) => {
  const axelData = options?.map((option) => {

    return {
      label: option?.option,
      value: option?.option
    }
  }) || []


  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Axel Configuration</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          setSideParams={setSideParams}
          sideParams={sideParams}
          filters={axelData}
          label={"axle_configuration"}
        />
      </div>
    </div>
  );
};

export default AxelFilter;
