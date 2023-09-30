import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const loadingSpanFilters = [
  {
    label: "15",
    count: 20,
  },
  {
    label: "17",
    count: 50,
  },
  {
    label: "20.1",
    count: 60,
  },
  {
    label: "20.9",
    count: 10,
  },
];

const LoadingSpanFilters = () => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">
        Loading Span (ft) / Loading Capacity (Cu.M)
      </h5>
      <div className="sidebar-checkbox">
          <FilterCheckbox filters={loadingSpanFilters} />
      </div>
    </div>
  );
};

export default LoadingSpanFilters;
