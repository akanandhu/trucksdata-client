import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function PopularModals({ popularModels , manufacturer, type}) {
  // const popular = useSelector((store) => store.vehicle.vehicleType);
  // const vehicleType = vehicleDetails?.vehicle_type?.name;
  // const vehicleBrand = vehicleDetails?.manufacturer?.name;
  // const popularVehicleType = popular?.filter(
  //   (item) => item.name === vehicleType
  // );
  // const popularSeries =
  //   popularVehicleType &&
  //   popularVehicleType[0]?.manufacturers?.filter(
  //     (item) => item.name === vehicleBrand
  //   );
  // const popularVehicles = popularSeries && popularSeries[0]?.series[0]?.vehicles.filter((item)=> item.is_popular === 1);
  const filteredPopularVehicle = popularModels?.filter((item)=> item.title !== vehicleDetails?.title)
  return (
    <div className="px-20 py-20 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
      <div className="text-black-1 fw-500">
        Popular {type} By {manufacturer}
      </div>
      <div className="py-10 w-100">
        {console.log("Popular ITEM !",filteredPopularVehicle)}
        {filteredPopularVehicle?.slice(0, 5).map((item) => (
          <Link key={item.id} href={`/details/${item?.id}`}>
            
            <div className="d-flex py-5 align-items-center">
              <div className="w-25 h-25">
                <img src={item?.images[0]?.thumbnail} alt="truck image" />
              </div>
              <div className="ps-3">
                <div className="text-black-1 fw-500">{item.title}</div>
                <div className="text-light-1 fw-400 text-15">
                  {item.max_price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPopularVehicle?.length > 5 ? <div className="d-flex justify-content-end">
        <a href="#" className="text-14 text-blue-1 underline">
          View All
        </a>
      </div>
      :null}
    </div>
  );
}

export default PopularModals;
