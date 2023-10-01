import React from "react";
// import truckImage from '/img/cars/truck-white.jpg'

function PopularModals() {
  const popularModals = [
    {
      id: 1,
      truckName: "Ashok Leyland 2820 Tipper",
      price: "Rs 29.01 - 30.04",
      truckImage: "/img/cars/truck-demo.jpeg",
    },
    {
      id: 2,
      truckName: "Ashok Leyland 2820 Tipper",
      price: "Rs 29.01 - 30.04",
      truckImage: "/img/cars/truck-demo.jpeg",
    },
    {
      id: 3,
      truckName: "Ashok Leyland 2820 Tipper",
      price: "Rs 29.01 - 30.04",
      truckImage: "/img/cars/truck-demo.jpeg",
    },
    {
      id: 4,
      truckName: "Ashok Leyland 2820 Tipper",
      price: "Rs 29.01 - 30.04",
      truckImage: "/img/cars/truck-demo.jpeg",
    },
    {
      id: 5,
      truckName: "Ashok Leyland 2820 Tipper",
      price: "Rs 29.01 - 30.04",
      truckImage: "/img/cars/truck-demo.jpeg",
    },
  ];
  return (
    <div>
      <div className="px-20 py-20 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
        <div className="text-black-1 fw-500">
          Popular Trucks By Ashok Leyland
        </div>
        <div className="py-10 w-100">
          {popularModals.map((item) => (
            <div className="d-flex py-5 align-items-center" key={item.id}>
              <div className="w-25 h-25">
                <img src={item.truckImage} alt="truck image" />
              </div>
              <div className="ps-3">
                <div className="text-black-1 fw-500">{item.truckName}</div>
                <div className="text-light-1 fw-400 text-15">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end">
          <a href="#" className="text-14 text-blue-1 underline">
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopularModals;
