import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const loadingSpanFilters = [
  {
    label: "15",
    value: 20,
  },
  {
    label: "17",
    value: 50,
  },
  {
    label: "20.1",
    value: 60,
  },
  {
    label: "20.9",
    value: 10,
  },
  
];

const LoadingSpanFilters = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">
        Loading Span (ft) / Loading Capacity (Cu.M)
      </h5>
      <div className="sidebar-checkbox">
          <ButtonFilter filters={loadingSpanFilters} label={'Loading Span (ft) / Loading Capacity (Cu.M)'}  />
      </div>
    </div>
  );
};

export default LoadingSpanFilters;
