import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const ChasisFilter = () => {
  const chasisData = [
    {
      label: "Cab & Chassis (CBC)",
      count: 1,
    },
  ];

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Chassis Options</h5>
      <div className="sidebar-checkbox">
        <FilterCheckbox filters={chasisData} />
      </div>
    </div>
  );
};

export default ChasisFilter;
