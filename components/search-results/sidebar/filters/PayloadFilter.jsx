import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const payloadData = [
  {
    label: "7650",
    value: 330,
  },
  {
    label: "7570",
    value: 1,
  },
  {
    label: "7525",
    value: 20,
  },
  {
    label: "7445",
    value: 111,
  },
];

const PayloadFilter = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Payload (Range)(Kg)</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter filters={payloadData} label={"Payload (Range)(Kg)"} />
      </div>
    </div>
  );
};

export default PayloadFilter;
