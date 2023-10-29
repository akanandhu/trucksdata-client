import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

function Tyres() {
  const tyreData = [
    {
      label: "3",
      count: 20,
    },
    {
      label: "4",
      count: 20,
    },
    {
      label: "6",
      count: 20,
    },
    {
      label: "8",
      count: 20,
    },
    {
      label: "10",
      count: 20,
    },
    {
      label: "12",
      count: 20,
    },
    {
      label: "16",
      count: 20,
    },
  ];
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Number Of Tyres</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter filters={tyreData} label={"Number Of Tyres"} />
      </div>
    </div>
  );
}

export default Tyres;
