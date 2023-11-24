import React, { useState } from "react";
import CompareInput from "./CompareInput";
import CompareInputSeperate from "./CompareSelectField";

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
