import React from "react";
import RercentBooking from "../../../pages/vendor-dashboard/dashboard/components/RercentBooking";
import SpecTable from "./SpecTable";
import { getSpecData } from "../../../utils/getSpecData";

const SpecificationTable = () => {
  const specContent = getSpecData();

  return (
    <>
      
      <div class="accordion" id="accordionExample">
        {specContent?.map((item) => (
          <div key={item.id} class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                className="d-flex accordion-button shadow-none bg-white text-black"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.collapseTarget}`}
                aria-expanded="true"
                // aria-controls="collapseOne"
              >
                <div className="me-2" style={{width:'100px' }}>
                  <img
                  src={item.icon}
                  alt={item.id}
                  width='50px'
                  />
                </div>
                {item.title}
              </button>
            </h2>
            <div
              id={item.collapseTarget}
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="w-100">
                  <SpecTable
                    tableData={item.tableData}
                    hasVariant={item.hasVariant}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpecificationTable;
