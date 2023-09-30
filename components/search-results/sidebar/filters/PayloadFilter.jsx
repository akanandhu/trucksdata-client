import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const payloadData = [
  {
    label: "7650",
    count: 330,
  },
  {
    label: "7570",
    count: 1,
  },
  {
    label: "7525",
    count: 20,
  },
  {
    label: "7445",
    count: 111,
  },
];

const PayloadFilter = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Payload (Range)(Kg)</h5>
      <div className="sidebar-checkbox">
        <FilterCheckbox filters={payloadData} />
      </div>
    </div>
  );
};

export default PayloadFilter;
