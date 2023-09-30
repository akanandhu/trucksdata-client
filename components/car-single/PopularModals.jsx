import React from "react";
import { trucks } from "./PopularTrucks";
// import truckImage from '/img/cars/truck-white.jpg'

function PopularModals() {
  return (
    <div className="py-3 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
      <div className="text-black-1 fw-500 ps-4">
        Popular Trucks By Ashok Leyland
      </div>

      <div className="my-3">
        {trucks.map((item) => (
          <div className="d-flex mt-2 align-items-start" key={item.id}>
            <div className="ms-4 w-25 h-25 py-1">
              <img src={item.modelImage} alt={item.model} />
            </div>
            <div className="ms-3 w-75 pe-4">
              <div className="text-black-1 fw-500 text-15">{item.model}</div>
              <div className="text-light-1 fw-400 text-14">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularModals;
