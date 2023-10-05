import React from "react";
import { useState } from "react";

const TopFilter = ({filterOptions}) => {
  const [filterOption, setFilterOption] = useState(filterOptions?.[0]?.value);  

  return (
    <div className="tabs__controls d-flex js-tabs-controls   x-gap-15 justify-center  tabs__controls d-flex js-tabs-controls ">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TopFilter;
