import React from "react";
import RercentBooking from "../../../pages/vendor-dashboard/dashboard/components/RercentBooking";
import SpecTable from "./SpecTable";
import { getSpecData } from "../../../utils/getSpecData";

const SpecificationTable = () => {
  const specContent = getSpecData();

  return (
    <>
      
      <div class="accordion lg:lh-1" id="accordionExample">
        {specContent?.map((item,i) => (
          <div class={i === specContent.length-1 ? 
          "accordion-item border-top-0 border-start-0 border-end-0 border-bottom-0" : 
          "accordion-item border-top-0 border-start-0 border-end-0"}>
            <h2 class="accordion-header text-wrap " id="headingOne">
              <button
                className="d-flex accordion-button shadow-none bg-white text-black title_fontsize"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.collapseTarget}`}
                aria-expanded="true"
                // aria-controls="collapseOne"
              >
                <div className="me-0" style={{width:'50px' }}>
                  <img
                  src={item.icon}
                  alt={item.id}
                  // width='50px'
                  />
                </div>
                <div className="mx-50 w-75" style={{paddingLeft:'5%'}}>
                {item.title}
                </div>
              </button>
            </h2>
            <div
              id={item.collapseTarget}
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body ">
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
