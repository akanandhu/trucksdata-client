import React, { useState } from "react";
import CompareInput from "./CompareInput";
import ComparePlusButton from "./ComparePlusButton";
import TopFilter from "../top-brands/TopFilter";
import CompareTwoVehiclesCard from "./CompareTwoVehiclesCard";
import CompareVehicles from "./CompareVehicles";
import SpecificationTable from "../details/specification-table/SpecificationTable";
import CompareTable from "./CompareTable";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useGetVehiclesInfinite } from "../../services/vehicles/useGetVehicles";
import getFlatData from "../../utils/getFlatData";
import { useInView } from "react-intersection-observer";
import { useReloadOnPageScroll } from "../../hooks/useReloadOnPageScroll";

const CompareInputSeperate = ({
  index,
  isManufacturer,
  vehicle,
  setVehicle,
}) => {
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
    isLoading,
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

  return (
    <div className="searchMenu-loc px-1 py-2 border-light rounded-4 js-form-dd js-liverSearch d-none md:d-block sm:d-block">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-10 fw-500 ls-2 lh-16">Select Vehicle</h4>
        <div className="text-10 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
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

      <div className="shadow-2 dropdown-menu min-width-400 position-absolute custom-dropdown-menu  ">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {dataToMap.map((item) => (
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
                    <div className="text-15 fw-500 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  );
};

const CompareBoxMobile = ({ vehicle, setVehicle }) => {
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: `Compare two trucks of your choice with the best truck comparison tool in India on TrucksDekho. You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`,
    delayAnimation: "300",
  };

  return (
    <div
      className="col-lg-12 container  mt-40 d-lg-none"
      key={item.id}
      // data-aos="fade"
      // data-aos-delay={item.delayAnimation}
    >
      <div className="rounded-4 layout-pt-md  layout-pb-md   view_bordershadow bg-white  ">
        <div className="d-flex  y-gap-15 d-xs-none d-md-block ">
          <div className="col-auto"></div>
          {vehicle?.map((obj, index) => {

            return (
              <div key={obj?.id} className="col   ">
                <div className="d-flex gap-1 flex-column justify-center h-full  px-2 py-10 ">
                  <div className="rounded-4 ">
                    <CompareInput
                      index={index}
                      isManufacturer={true}
                      vehicle={vehicle}
                      setVehicle={setVehicle}
                    />
                  </div>
                  <div className="rounded-4 ">
                    <CompareInputSeperate
                      index={obj?.id}
                      isManufacturer={true}
                      vehicle={vehicle}
                      setVehicle={setVehicle}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button className="btn btn-primary w-50  ">Compare</button>
        </div>
      </div>
    </div>
  );
};

export default CompareBoxMobile;
