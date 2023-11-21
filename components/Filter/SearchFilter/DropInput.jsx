import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePowerSource from "../../../services/usePowerSource";

function DropInput(props) {
  const { dropdownDetails, title, placeHolder } = props;
  const vehicleData = useSelector((store) => store.vehicle.vehicleType);
  const manufacturerData = useSelector(
    (store) => store.manufacturer.manufacturerDetails
  );
  const tab = useSelector((store) => store.hero);
  const [searchValue, setSearchValue] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [secondOption, setSecondOption] = useState(null);
  const [dropListItem, setDropListItem] = useState({});
  const [dropListItem2, setDropListItem2] = useState({
    type: "model",
    list: [23, 44],
  });

  const { data: powesource } = usePowerSource();

  const handleSearchValue = (e) => {
    setSearchValue({
      ...searchValue,
      name: e.target.name,
      value: e.target.value,
    });
  };

  useEffect(() => {
    let dropdownList = [];
    manufacturerData?.map((manufacturer) => {
      dropdownList.push(manufacturer.name);
    });
    setDropListItem({ type: "manufacturer", list: dropdownList });
  }, []);

  const handleOptionClick = (item) => {
    // if (searchValue.name === "manufacturer") {
      setDropListItem2({ ...dropListItem2 ,type: "model", list: [] });
      
    setSelectedItem(item);
    
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
                  value={searchValue.value}
                  onClick={handleSearchValue}
                  name={dropdownDetails.name}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
          <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {/* {handleDropDownDetails(
                dropdownDetails["title"],
                dropdownDetails["optionId"]
              )} */}

              {dropdownDetails.optionId === 1 &&
                dropListItem?.list?.map((item, i) => (
                  <li
                    className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                      selectedItem && selectedItem.id === item.id
                        ? "active"
                        : ""
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
                ))}

              {dropdownDetails.optionId === 2 &&
                dropListItem2?.list?.map((item, i) => (
                  <li
                    className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                      selectedItem && selectedItem.id === item.id
                        ? "active"
                        : ""
                    }`}
                    key={item}
                    role="button"
                    onClick={(e) => handleOptionClick(e, item)}
                  >
                    <div className="d-flex">
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
    </>
  );
}

export default DropInput;
