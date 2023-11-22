import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const VariantFilter = ({sideParams, setSideParams}) => {
  const variantData = [
    {
      label: "CBC",
      value: 20,
    },
    {
      label: "FSD",
      value: 100,
    },
    {
      label: "HSD",
      value: 120,
    },
  ];

  return (
    <div className="sidebar__item">
    <h5 className="text-18 fw-500 mb-10">Variant Options</h5>
    <div className="sidebar-checkbox">
      <ButtonFilter filters={variantData} setSideParams={setSideParams} sideParams={sideParams} label={"Chassis Options"} />
    </div>
  </div>
  );
};

export default VariantFilter;
