import React, { useState } from "react";
import ComparePlusButton from "./ComparePlusButton";
import Image from "next/image";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useGetVehiclesInfinite } from "../../services/vehicles/useGetVehicles";
import getFlatData from "../../utils/getFlatData";
import { useInView } from "react-intersection-observer";
import { useReloadOnPageScroll } from "../../hooks/useReloadOnPageScroll";

const CompareInput = ({ index, isManufacturer, vehicle, setVehicle }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: vehicleTypes } = useVehicleTypes();
  const vehicleData = vehicleTypes?.data?.data;
  const vehicleId =
    vehicleData?.find((vehicle) => vehicle?.name === searchValue)?.id ?? null;
  const {
    data: results,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetVehiclesInfinite({ vehicle_type: vehicleId });

  const vehicles = getFlatData(results || []);

  const dataToMap = isManufacturer
    ? vehicles?.map((vehicleItem) => {
        return {
          ...vehicleItem,
          name: vehicleItem.title,
        };
      })
    : vehicleData;

  const [ref, inView] = useInView();
  useReloadOnPageScroll({
    fetchNextPage,
    inView,
    isFetchingNextPage,
    hasNextPage,
  });

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    if (isManufacturer) {
      const updatedVehicle = vehicle.map((vehicleItem) =>
        vehicleItem.index === index
          ? {
              ...vehicleItem,

              vehicle: item,
            }
          : vehicleItem
      );
      setVehicle(updatedVehicle);
    }
  };

  const currentItem = vehicle?.find((item) => item.index === index);
  const logo = currentItem?.vehicle
    ? currentItem?.vehicle?.images?.[0]?.thumbnail
    : "";

  return (
    <div className="searchMenu-loc px-lg-20 py-lg-10 py-2 px-1  border-light rounded-4 js-form-dd js-liverSearch">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <div className="d-flex justify-content-between  ">
          <div className="text-15 text-light-1 ls-2 lh-16 d-flex flex-column align-content-start   justify-content-start ">
            <h4 className=" text-10 fw-500 ls-2 ">Select Type</h4>

            <div>
              <input
                autoComplete="off"
                type="search"
                className="js-search js-dd-focus text-10"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="rounded-4 d-flex align-items-center  ">
            <div className="d-flex justify-content-center rounded-circle mb-xl-4   ">
              <Image
                src={logo || "/img/compare/truck-compare.svg"}
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

      <div className="shadow-2 dropdown-menu min-width-400 position-absolute custom-dropdown-menu ">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {dataToMap?.map((item) => (
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
                    <div className="text-15 lh-12 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <div ref={ref}></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompareInput;
