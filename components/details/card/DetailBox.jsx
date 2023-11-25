import { useState } from "react";
import { states } from "../../../data/states";

const DetailBlock = ({data, vehicleDetails }) => {
  const isActive = vehicleDetails?.vehicle_type[data.key] === "active";
  const isDiscontinued = data?.value === "Discontinued";

  return (
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      {console.log("Details ",vehicleDetails)}
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{data.heading}</h4>
        <div
          className={`text-15 text-light-1 ${
            isActive
              ? " text-success"
              : isDiscontinued
              ? "text-bg-danger"
              : "text-black "
          } ls-2 lh-16`}
        >
          {data.key === 'vehicle_type' ? <label>{vehicleDetails?.vehicle_type["status"] }</label> : null}
          {data.key === 'manufacturer_id' ? <label>{vehicleDetails?.manufacturer?.name}</label> : null}
          {data.key === 'energy_source_id' ? <label>{vehicleDetails?.energy_source?.name}</label> : null}
          {data.key === 'category_name' ? <label>{vehicleDetails?.category_name}</label> : null}
        </div>
      </div>
      
    </div>
  );
};

const data = [
  {
    heading: "Manufacturer",
    value: "Bharat Benz",
  },
  {
    heading: "Power Source",
    value: "Diesel",
  },
  {
    heading: "Category of Vehicle",
    value: "N2",
  },
  {
    heading: "Status",
    value: "Active",
  },
];

const DetailBox = ({vehicleDetails}) => {
  const details = [
    {
      heading: "Manufacturer",
      key: "manufacturer_id",
    },
    {
      heading: "Power Source",
      key: "energy_source_id",
    }
    ,
    {
      heading: "Category of Vehicle",
      key: "category_name",
    },
    {
      heading: "Status",
      key: "vehicle_type",
    },
  ];
  const [click, setClick] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [districtValue, setDistrictValue] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  function handleClick() {
    setClick(!click);
  }

  const handleOptionClick = (item) => {
    setSearchValue(item.state);
    setSelectedItem(item);
  };

  const handleDistrict = (item) => {
    setDistrictValue(item);
    setSelectedDistrict(item);
  };

  return (
    <>
      {details.map((obj) => {
        console.log("Blcok ",obj);
        return (
          vehicleDetails && vehicleDetails[obj.key] || vehicleDetails && vehicleDetails[obj.key]?.status? 
          <div key={obj.heading} className="col-12">
            <DetailBlock data={obj} vehicleDetails={vehicleDetails}/>
          </div>
          :null
        );
      })}

     

      <div className="col-12">
        <button
          onClick={handleClick}
          className="d-flex button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
        >
          <div>Download Brochure</div>
        </button>
      </div>

      <div className={`langMenu js-langMenu  ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleClick}></div>
        <div className="langMenu__content-form  bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">
              Please provide your details for downloading Brochure
            </div>
            {/* End title */}
            <button className="pointer" onClick={handleClick}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          <form className="row y-gap-20 p-5">
            <div className="col-12 col-lg-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-14 text-light-1">Name</label>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-14 text-light-1">Email</label>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
                <div
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  data-bs-offset="0,22"
                >
                  <label className="lh-1 text-14 text-light-1">State</label>
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

                <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
                  <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                    <ul className="y-gap-5 js-results">
                      {states.map((item) => (
                        <li
                          className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                            selectedItem && selectedItem.state === item.state
                              ? "active"
                              : ""
                          }`}
                          key={item.state}
                          role="button"
                          onClick={() => handleOptionClick(item)}
                        >
                          <div className="d-flex">
                            <div className="icon-location text-light-1 text-20 pt-4" />
                            <div className="ml-10">
                              <div className="text-15 lh-12 fw-500 js-search-option-target">
                                {item.state}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="shadow-2 dropdown-menu min-width-400 overflow-scroll  position-absolute ">
                  <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                    <ul className="y-gap-5 js-results">
                      {states.map((item) => (
                        <li
                          className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                            selectedItem && selectedItem.state === item.state
                              ? "active"
                              : ""
                          }`}
                          key={item.state}
                          role="button"
                          onClick={() => handleOptionClick(item)}
                        >
                          <div className="d-flex">
                            <div className="icon-location text-light-1 text-20 pt-4" />
                            <div className="ml-10">
                              <div className="text-15 lh-12 fw-500 js-search-option-target">
                                {item.state}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
                <div
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  data-bs-offset="0,22"
                >
                  <label className="lh-1 text-14 text-light-1">District</label>
                  <div className="text-15 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
                    <div>
                      <input
                        type="search"
                        className="js-search js-dd-focus"
                        value={districtValue}
                        onChange={(e) => setDistrictValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="shadow-2 dropdown-menu min-width-400 max-height-200 position-absolute ">
                  <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                    <ul className="y-gap-5 js-results">
                      {selectedItem?.districts?.map((item) => (
                        <li
                          className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                            selectedDistrict && selectedDistrict === item
                              ? "active"
                              : ""
                          }`}
                          key={item}
                          role="button"
                          onClick={() => handleDistrict(item)}
                        >
                          <div className="d-flex">
                            <div className="icon-location text-light-1 text-20 pt-4" />
                            <div className="ml-10">
                              <div className="text-15 lh-12 fw-500 js-search-option-target">
                                {item}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="shadow-2 dropdown-menu min-width-400 position-absolute ">
                  <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                    <ul className="y-gap-5 js-results">
                      {selectedItem?.districts?.map((item) => (
                        <li
                          className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                            selectedDistrict && selectedDistrict === item
                              ? "active"
                              : ""
                          }`}
                          key={item}
                          role="button"
                          onClick={() => handleDistrict(item)}
                        >
                          <div className="d-flex">
                            <div className="icon-location text-light-1 text-20 pt-4" />
                            <div className="ml-10">
                              <div className="text-15 lh-12 fw-500 js-search-option-target">
                                {item}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <button
                type="submit"
                href="#"
                className="button py-20 -dark-1 bg-blue-1 text-white w-100"
              >
                Download <div className=" ml-15" />
              </button>
            </div>
          </form>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default DetailBox;
