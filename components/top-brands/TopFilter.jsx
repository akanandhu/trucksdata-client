import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBrandTab } from "../../features/topFilter/topFilterSlice";

const TopFilter = ({ vehicleData, flag }) => {
  const dispach = useDispatch();
  const filterOption = useSelector(
    (store) => store.topfilter[flag]?.currentTab
  );
  const handleFilter = (vehicle) => {
    dispach(setCurrentBrandTab(vehicle))
  };
  return (
    <div className="tabs__controls tabs__controls_buttons d-flex x-gap-15  js-tabs-controls">
      {/* {filterOptions.map((option) => (
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
      ))} */}
      {vehicleData?.map((vehicleType) => (
        <div className="col-auto" key={vehicleType["id"]}>
          {vehicleType["status"] === "active" ? (
            <button
              className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 ${
                filterOption && filterOption === vehicleType["name"] ? "is-tab-el-active" : ""
              }`}
              onClick={() => handleFilter(vehicleType["name"])}
            >
              {vehicleType["name"]}
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TopFilter;
