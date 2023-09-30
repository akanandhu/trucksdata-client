import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const axelData = [
  {
    label: "4X2",
    count: 20,
  },
];

const AxelFilter = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Axle Configuartion</h5>
      <div className="sidebar-checkbox">
        <FilterCheckbox filters={axelData} />
      </div>
      {/* End Sidebar-checkbox */}
    </div>
  );
};

export default AxelFilter;
