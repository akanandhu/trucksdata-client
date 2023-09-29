import React from "react";
// import truckImage from '/img/cars/truck-white.jpg'

function PopularModals() {
  return (
    <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
      <div className="text-black-1 fw-500">Popular Trucks By Ashok Leyland</div>
      <div className="d-flex y-gap-15 items-center justify-between my-2">
        <div className="">
          {/* <div className="w-100" style={{backgroundColor:'yellow',width:'500px'}}> */}
          <img
            src="/img/cars/truck-white.jpg"
            alt="truck image"
            width={100}
            height={100}
          />
        </div>
        {/* </div> */}
        <div>
          <div className="text-black-1 fw-500">Ashok Leyland 2820 Tipper</div>
          <div className="text-light-1 fw-400 text-15">Rs 29.01 - 30.04</div>
        </div>
      </div>
    </div>
  );
}

export default PopularModals;
