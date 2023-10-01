import React from "react";
import RercentBooking from "../../../pages/vendor-dashboard/dashboard/components/RercentBooking";
import SpecTable from "./SpecTable";
import { getSpecData } from "../../../utils/getSpecData";

const SpecificationTable = () => {
  
    const specContent = getSpecData()

  return (
    <>
      {specContent?.map((item) => (
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
                <SpecTable tableData={item.tableData} hasVariant={item.hasVariant} />
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
