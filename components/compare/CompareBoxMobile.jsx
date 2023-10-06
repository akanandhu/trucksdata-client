import React, { useState } from "react";
import CompareInput from "./CompareInput";
import ComparePlusButton from "./ComparePlusButton";
import TopFilter from "../top-brands/TopFilter";
import CompareTwoVehiclesCard from "./CompareTwoVehiclesCard";
import CompareVehicles from "./CompareVehicles";
import SpecificationTable from "../details/specification-table/SpecificationTable";
import CompareTable from "./CompareTable";

const CompareInputSeperate = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      model: "Ecomet Star ",
      brand: "Ashok Leyland",
    },
    {
      id: 2,
      model: "Boss Series",
      brand: "Ashok Leyland",
    },
    {
      id: 3,
      model: "Agni Series",
      brand: "TATA",
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.model);
    setSelectedItem(item);
  };

  return (
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">Select Brand/Model</h4>
        <div className="text-15 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
          <div>
            <input
              autoComplete="off"
              type="search"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          
        </div>
      </div>
      {/* End location Field */}

      <div className="shadow-2 dropdown-menu min-width-400 position-absolute ">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {locationSearchContent.map((item) => (
              <li
                className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                  selectedItem && selectedItem.id === item.id ? "active" : ""
                }`}
                key={item.id}
                role="button"
                onClick={() => handleOptionClick(item)}
              >
                <div className="d-flex">
                  <div className="icon-car text-light-1 text-20 pt-4" />
                  <div className="ml-10">
                    <div className="text-15 lh-12 fw-500 js-search-option-target">
                      {item.model}
                    </div>
                    <div className="text-14 lh-12 text-black mt-5">
                      {item.brand}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const CompareBoxMobile = () => {
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: `Compare two trucks of your choice with the best truck comparison tool in India on TrucksDekho. You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`,
    delayAnimation: "300",
  };

  const filterOptions = [
    { label: "Trucks", value: "trucks" },
    { label: "Tippers", value: "tippers" },
    { label: "Pick-ups", value: "pick_ups" },
    { label: "Trailers", value: "trailers" },
    { label: "3-Wheelers", value: "three_wheelers" },
  ];

  return (
    <div
      className="col-lg-12 container  mt-40   "
      key={item.id}
      // data-aos="fade"
      // data-aos-delay={item.delayAnimation}
    >
      <div className="rounded-4 layout-pt-md  layout-pb-md  view_bordershadow bg-white  ">
        <div className="d-flex flex-wrap y-gap-30   ">
          <div className="col-auto"></div>
          <div className="col d-xs-none d-md-block  ">
            <div className="d-flex gap-1 flex-column justify-center h-full px-30 py-20 ">
              
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInputSeperate />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex gap-1 flex-column justify-center h-full px-30 py-20">
              {/* <div>
                <ComparePlusButton />
              </div> */}
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInputSeperate />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex gap-1  flex-column justify-center h-full px-30 py-20">
              {/* <div>
                <ComparePlusButton />
              </div> */}
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInputSeperate />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button className="btn btn-primary w-25  ">Compare</button>
        </div>
      </div>

      
    </div>
  );
};

export default CompareBoxMobile;
