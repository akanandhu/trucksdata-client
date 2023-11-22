import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

function Tyres({sideParams, setSideParams}) {
  const tyreData = [
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "6",
      value: 6,
    },
    {
      label: "8",
      value: 8,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "12",
      value: 12,
    },
    {
      label: "16",
      value: 16,
    },
  ];
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Number Of Tyres</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter setSideParams={setSideParams} sideParams={sideParams} filters={tyreData} label={"Number Of Tyres"} />
      </div>
    </div>
  );
}

export default Tyres;
