import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";
import InputRange from "react-input-range";

const LoadingSlider = () => {
  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">₹{100}</span>-
          <span className="js-upper mx-1">₹{1000}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={100000}
          maxValue={1000000}
          value={1000}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

const LoadingSpanFilters = ({ sideParams, setSideParams, options, specId }) => {
  const loadingSpanFilters = options?.map((option) => {
    return {
      label: option?.option,
      value: option?.option,
    };
  });

  return (
    <div className="sidebar__item pb-30">
      <h5 className="text-18 fw-500 mb-10">Loading Span</h5>
      <div className="row x-gap-10 y-gap-30">
        <div className="col-12">
          <LoadingSlider />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpanFilters;
