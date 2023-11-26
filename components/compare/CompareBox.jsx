import React, { useEffect, useRef, useState } from "react";
import CompareVehicles from "./CompareVehicles";
import CompareTable from "./CompareTable";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useQueries } from "react-query";
import { getVehicleData } from "../../services/useViewVehicle";
import toast, { useToaster } from "react-hot-toast";
import Spinner from "../loading/Spinner";
import { useRouter } from "next/router";
import CompareFields from "./CompareFields";
import CompareBoxMobile from "../compare/CompareBoxMobile";

const toastStyles = {
  icon: "🚚",
  position: "top-right",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

const CompareInputSeperate = ({
  index,
  isManufacturer,
  vehicle,
  setVehicle,
  setVehicleId,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: vehicleTypes } = useVehicleTypes();
  const vehicleData = vehicleTypes?.data?.data;

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setVehicleId(item?.id);
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
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">
          {isManufacturer ? "Select Model" : "Select Body Type"}
        </h4>
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

      <div className="shadow-2 dropdown-menu min-width-400 position-absolute custom-dropdown-menu ">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {vehicleData?.map((item) => (
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
                    <div className="text-15  fw-500 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {isManufacturer && <div ref={ref}></div>}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CompareBox = ({ vehicle, setVehicle }) => {
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: `Compare two trucks of your choice with the best truck comparison tool in India on TrucksDekho. You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`,
    delayAnimation: "300",
  };
  const [comparisonInitiated, setComparisonInitiated] = useState(false);
  const compareTableRef = useRef(null);
  const [ids, setIds] = useState([]);

  const [compared, setCompared] = useState(false);

  function handleCompare() {
    const idsToCall = vehicle?.map((item) => {
      if (item.vehicle) {
        return item.vehicle.id;
      } else {
        return;
      }
    });

    const idCollection = idsToCall?.filter(Boolean);

    if (idCollection?.length >= 2) {
      setCompared(true);
      setIds(idCollection);
    
      setComparisonInitiated(true);
    } else {
      setCompared(false);
      toast.error("Select Atleast 2 Vehicle Models To Compare", {
        ...toastStyles,
      });
    }
  }

  useEffect(() => {
    if (comparisonInitiated && compareTableRef.current) {
      compareTableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comparisonInitiated]);

  // vehicleId set
  const router = useRouter();
  
  const { vehicle_one, vehicle_two } = router?.query || {};
  const hasIds = Boolean(vehicle_one) && Boolean(vehicle_two);

  useEffect(() => {
    if (vehicle_one && vehicle_two) {
      const idsToCall = vehicle?.map((item) => {
        if (item.vehicle) {
          return item.vehicle.id;
        } else {
          return;
        }
      });
      const idCollection = idsToCall?.filter(Boolean);

      setIds(idCollection);
    }
  }, [vehicle, vehicle_one, vehicle_two]);

  const queries = useQueries(
    ids.map((id) => ({
      queryKey: ["vehicle-multiple", id],
      queryFn: () => getVehicleData(id),
    }))
  );

  const vehicleCollectedData = queries.map((query) => query?.data?.data);
  const isLoading = queries.some((query) => query.isLoading);

  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;


  return (
    <div key={item.id} className="col-lg-12 container mt-40">
      <div className="rounded-4 layout-pt-md  layout-pb-md  view_bordershadow bg-white d-lg-block sm:d-none md:none">
        <div className="d-flex flex-wrap y-gap-30  d-xs-none d-md-block ">
          <div className="col-auto"></div>
          {vehicle?.map((item, index) => {
            return (
              <div key={item.index} className="col ">
                <CompareFields
                  item={item}
                  vehicle={vehicle}
                  setVehicle={setVehicle}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button
            onClick={handleCompare}
            className="btn btn-primary w-25 bg-blue-1  h-50 "
          >
            Compare
          </button>
        </div>
      </div>
      <CompareBoxMobile
        vehicle={vehicle}
        setVehicle={setVehicle}
        handleCompare={handleCompare}
      />

      {isLoading && (
        <div className="mt-5">
          {" "}
          <Spinner />
        </div>
      )}

      {compared && (
        <div
          id={"compareTableSection"}
          className="mt-40 view_bordershadow bg-white    p-2 "
          ref={compareTableRef}
        >
          <CompareTable  compareData={vehicleCollectedData} />
        </div>
      )}

      <div className="mt-40 view_bordershadow mb-40 ">
        <CompareVehicles />
      </div>
    </div>
  );
};

export default CompareBox;
