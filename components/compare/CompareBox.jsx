import React from "react";
import CompareInput from "./CompareInput";
import ComparePlusButton from "./ComparePlusButton";
import TopFilter from "../top-brands/TopFilter";
import CompareTwoVehiclesCard from "./CompareTwoVehiclesCard";
import CompareVehicles from "./CompareVehicles";
import SpecificationTable from "../details/specification-table/SpecificationTable";
import CompareTable from "./CompareTable";

const CompareBox = () => {
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
      className="col-lg-12 container    "
      key={item.id}
      // data-aos="fade"
      // data-aos-delay={item.delayAnimation}
    >
      <div className="rounded-4 layout-pt-md layout-pb-md  view_bordershadow  ">
        <div className="d-flex flex-wrap y-gap-30   ">
          <div className="col-auto"></div>
          <div className="col  ">
            <div className="d-flex gap-1 flex-column justify-center h-full px-30 py-20 ">
              <div className="rounded-4">
                <ComparePlusButton />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex gap-1 flex-column justify-center h-full px-30 py-20">
              <div>
                <ComparePlusButton />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex gap-1  flex-column justify-center h-full px-30 py-20">
              <div>
                <ComparePlusButton />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
              <div className="rounded-4 ">
                <CompareInput />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button className="btn btn-primary w-25 ">Compare</button>
        </div>
      </div>

      <div className="mt-40 view_bordershadow   p-2 ">
        <CompareTable  />
      </div>

      <div className="mt-40 view_bordershadow ">
        <CompareVehicles filterOptions={filterOptions} />
      </div>
    </div>
  );
};

export default CompareBox;
