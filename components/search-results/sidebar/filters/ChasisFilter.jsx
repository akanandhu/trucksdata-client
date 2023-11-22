import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const ChasisFilter = ({ sideParams, setSideParams }) => {
  const chasisData = [
    {
      label: "Cab & Chasis (CBC)",
      value: "",
    },
  ];

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Chassis Options</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          sideParams={sideParams}
          setSideParams={setSideParams}
          filters={chasisData}
          label={"Chassis Options"}
        />
      </div>
    </div>
  );
};

export default ChasisFilter;
