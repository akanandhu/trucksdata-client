import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchButton from "./SearchButton";
import DropInput from "./DropInput";
import { dropdown } from "./DropdownItems";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import MobileTab from "../../search-filter/MobileTab";

function FilterTabs() {
  const itemList = [
    "Manufacturer",
    "Vehicle Class",
    "Application",
    "GVW",
    "Power Source",
  ];

  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <div>
      <Tabs className="tabs -underline-2 js-tabs">
        <TabList className="sm:d-none md:d-none tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
          {dropdown.map((item, i) => (
            <Tab className="col-auto" key={i}>
              <button className="pb-2 tabs__button text-light-1 fw-500 js-tabs-button d-flex">
                <div className="w-25">
                  <img src={item?.icon} alt="icons" width="50px" />
                </div>
                <div className="ps-2">{item.tabItem}</div>
              </button>
            </Tab>
          ))}
        </TabList>
        <MobileTab />
        {/* End tab-controls */}
        <div className="tabs__content js-tabs-content">
          {dropdown.map((item) => (
            <TabPanel key={item.id}>
              <div className="d-flex p-2 bd-highlight justify-content-between sm:flex-column md:flex-column">
                {item.dropdownItem.map((dropdownDetails) => (
                  <DropInput
                    key={dropdownDetails?.id}
                    dropdownDetails={dropdownDetails}
                  />
                ))}
                <SearchButton />
              </div>
            </TabPanel>
          ))}
        </div>
        {/* End tab_content */}
      </Tabs>
    </div>
  );
}

export default FilterTabs;
