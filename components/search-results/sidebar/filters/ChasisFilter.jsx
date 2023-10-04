import React from "react";
import ButtonFilter from "../../../hero/hero-8/FilterButtons";

const ChasisFilter = () => {
  const chasisData = [
    {
      label: "Cab & Chassis (CBC)",
      value: 1,
    },
  ];

  return (
    <div className="sidebar__item">
    <h5 className="text-18 fw-500 mb-10">Chassis Options</h5>
    <div className="sidebar-checkbox">
      <ButtonFilter filters={chasisData} label={"Chassis Options"} />
    </div>
  </div>
  );
};

export default ChasisFilter;
