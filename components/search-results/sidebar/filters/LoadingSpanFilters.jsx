import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const LoadingSpanFilters = ({ sideParams, setSideParams, options, specId }) => {
  const loadingSpanFilters = options?.map((option) => {
    return {
      label: option?.option,
      value: option?.option,
    };
  });

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">
        Loading Span (ft) / Loading Capacity (Cu.M)
      </h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          sideParams={sideParams}
          setSideParams={setSideParams}
          filters={loadingSpanFilters}
          label={"loading_capacity"}
          specId={specId}
        />
      </div>
    </div>
  );
};

export default LoadingSpanFilters;
