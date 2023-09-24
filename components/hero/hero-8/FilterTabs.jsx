import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchButton from "./SearchButton";
import DropInput from "./DropInput";
import { dropdown } from "./DropdownItems";
function FilterTabs() {
  // const itemList = [
  //   "Manufacturer",
  //   "Vehicle Class",
  //   "Application",
  //   "GVW",
  //   "Power Source",
  // ];

  return (
    <>
      <Tabs className="tabs -underline-2 js-tabs">
        <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
          {dropdown.map((item, i) => (
            <Tab className="col-auto" key={i}>
              <button className="tabs__button text-light-1 fw-500 js-tabs-button">
                {item.tabItem}
              </button>
            </Tab>
          ))}
        </TabList>
        {/* End tab-controls */}

        <div className="tabs__content js-tabs-content">
          {dropdown.map((item) => (
            <TabPanel key={item?.id}>
              <div className="d-flex p-2 bd-highlight justify-content-between">
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
    </>
  );
}

export default FilterTabs;
