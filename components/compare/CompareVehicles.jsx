import React from "react";
import TopFilter from "../top-brands/TopFilter";
import CompareTwoVehiclesCard from "./CompareTwoVehiclesCard";

const CompareVehicles = ({filterOptions, vehicleData}) => {
  return (
    <section className="pb-30">
      <div className="container view_bordershadow bg-white p-5">
        <div className="row y-gap-20 justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Compare Models</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore the hottest comparisons
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
          <div className="tabs -pills-2 pt-12">
            <TopFilter filterOptions={filterOptions} vehicleData={vehicleData} flag='compare'/>
          </div>
          <CompareTwoVehiclesCard />
        </div>
      </div>
    </section>
  );
};

export default CompareVehicles;
