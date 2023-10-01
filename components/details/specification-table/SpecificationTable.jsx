import React from "react";
import RercentBooking from "../../../pages/vendor-dashboard/dashboard/components/RercentBooking";
import SpecTable from "./SpecTable";

const SpecificationTable = () => {
  const specContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "GVW, Kerb, Payload & Vehicle Dimensions (mm), All Dimensions are for cab & chassis (CBC)",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
        hasVariant: true
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "Engine Specification",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "Transmission",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
        id: 4,
        collapseTarget: "Four",
        title: "Chassis Frame & Suspension",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 5,
        collapseTarget: "Five",
        title: "Steering & Braking",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 6,
        collapseTarget: "Six",
        title: "Tyre Size",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 7,
        collapseTarget: "Seven",
        title: "Cabin & Electrical",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 8,
        collapseTarget: "Eight",
        title: "Endurance",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 9,
        collapseTarget: "Nine",
        title: "Other Features",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
      {
        id: 10,
        collapseTarget: "Ten",
        title: "Applications",
        content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
      },
  ];

  return (
    <>
      {specContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex justify-content-between "
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              
              <div className="button text-dark-1 text-start">{item.title}</div>
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 px-40">
                <SpecTable hasVariant={item.hasVariant} />
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecificationTable;
