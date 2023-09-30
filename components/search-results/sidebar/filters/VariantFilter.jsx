import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const VariantFilter = () => {
  const variantData = [
    {
      label: "CBC",
      count: 20,
    },
    {
      label: "FSD",
      count: 100,
    },
    {
      label: "HSD",
      count: 120,
    },
  ];

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Variant Options</h5>
      <div className="sidebar-checkbox">
        <FilterCheckbox filters={variantData} />
      </div>
    </div>
  );
};

export default VariantFilter;
