import React, { useState } from "react";
import ComparePlusButton from "./ComparePlusButton";
import Image from "next/image";

const CompareInput = () => {
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
        <div className="d-flex justify-content-between  ">
          <div className="text-15 text-light-1 ls-2 lh-16 d-flex flex-column align-content-start   justify-content-start ">
            <h4 className="text-15 fw-500 ls-2 lh-16">Select Brand/Model</h4>

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
          <div className="rounded-4 d-flex align-items-center  ">
            <div className="d-flex justify-content-center rounded-circle mb-xl-4   ">
              <Image
                src={"/img/compare/truck-compare.svg"}
                alt="illustration"
                width={90}
                height={90}
                className=" rounded-circle "
              />
            </div>
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
  );
};

export default CompareInput;
