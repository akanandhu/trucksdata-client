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
  const [dropListItem, setDropListItem] = useState([]);

  const { data: powesource } = usePowerSource();

  useEffect(() => {
    if (searchValue["option1"]) {
      let dropdownList = new Set();
      let series = new Set();
      vehicleData?.map((vehicle) => {
        vehicle.manufacturers.map((item) => {
          series.add(item);
        });
      });

      const seriesArray = [...series];

      const filteredSeries = seriesArray.filter(
        (item) => item.name === searchValue["option1"]
      );
      filteredSeries.map((item) => {
        item.series.map((seriesItem) => {
          dropdownList.add(seriesItem.title);
        });
      });

      setDropListItem([...dropdownList]);
    }
  }, [searchValue["option1"]]);

  const handleSearchValue = (e) => {
    let dropdownList = [];
    if (e.target.name === "1") {
      manufacturerData?.map((item) => {
        dropdownList.push(item.name);
      });
      setDropListItem(dropdownList);
    }
    if (e.target.name === "2") {
      setDropListItem(["m1", "m2"]);
    }
  };

  const handleOptionClick = (item, id) => {
    setSearchValue({ ...searchValue, [`option${id}`]: item });
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
                  value={searchValue["option" + dropdownDetails.optionId]}
                  onClick={(e) => handleSearchValue(e, searchValue)}
                  name={dropdownDetails.optionId}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
          <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {dropListItem?.map((item, i) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item + i}
                  role="button"
                  onClick={() =>
                    handleOptionClick(item, dropdownDetails.optionId)
                  }
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
          {console.log("Search value ", searchValue)}
        </div>
      </div>
    </>
  );
}

export default DropInput;
