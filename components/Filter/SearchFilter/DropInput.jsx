import { useState } from "react";
import { useSelector } from "react-redux";
import usePowerSource from "../../../services/usePowerSource";

function DropInput(props) {
  const { dropdownDetails, title, placeHolder } = props;
  const vehicleData = useSelector((store) => store.vehicle.vehicleType);
  const manufacturerData = useSelector(
    (store) => store.manufacturer.manufacturerDetails
  );
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: powesource } = usePowerSource();

  const handleOptionClick = (item) => {
    setSearchValue(item);
    setSelectedItem(item);
  };

  const handleDropDownDetails = (title) => {
    let dropdownList = [];
    const power = powesource?.data["data"];
    if (title === "Manufacturer") {
      manufacturerData?.map((manufacturer) => {
        dropdownList.push(manufacturer.name);
      });
    }
    if (title === "Model") {
      dropdownList = ["Model 1", "Model 2", "Model 3"];
    }
    if (title === "Body Type") {
      vehicleData?.map((vehicle) => {
        dropdownList.push(vehicle.name);
      });
    }
    if (title === "Power Source") {
      power?.map((vehicle) => {
        dropdownList.push(vehicle.name);
      });
    }

    return dropdownList.map((item, i) => (
      <li
        className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
          selectedItem && selectedItem.id === item.id ? "active" : ""
        }`}
        key={item}
        role="button"
        onClick={() => handleOptionClick(item)}
      >
        <div className="d-flex">
          <div className="ml-10">
            <div className="text-15 lh-12 fw-500 js-search-option-target">
              {item}
            </div>
          </div>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                {title || dropdownDetails.title}
              </h4>
              <div className="text-15 text-light-1 ls-2 lh-16">
                <input
                  autoComplete="off"
                  type="search"
                  placeholder={placeHolder || dropdownDetails.placeholder}
                  className="js-search js-dd-focus"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
          <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {handleDropDownDetails(dropdownDetails["title"])}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropInput;
