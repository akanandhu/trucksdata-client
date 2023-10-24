import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const axelData = [
  {
    label: "4X2",
    count: 20,
  },
];

const AxelFilter = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Axel Configuration</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter filters={axelData} label={"Axel Configuration"} />
      </div>
    </div>
  );
};

export default AxelFilter;
