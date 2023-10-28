import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchButton from "./SearchButton";
import DropInput from "./DropInput";
import { dropdown } from "./DropdownItems";
import MobileTab from "../../search-filter/MobileTab";
import { useSelector } from "react-redux";

function FilterTabs(props) {
  const { manufacturerData, vehicleData } = props;
  const tab = useSelector((store) => store.hero);
  const dropdownComponent = (dropdowns, screen) => {
    const selectedTab = tab.currentTab;
    let filteredDropdown;
    const filtered = dropdown.filter((item) => item["tabItem"] === selectedTab);
    if(screen === "lg"){
      filteredDropdown = dropdowns;
    }
    if(screen === "sm"){
      filteredDropdown = filtered[0];
    }
    return(
      filteredDropdown.dropdownItem.map((dropdownDetails) => (
        <DropInput
        key={dropdownDetails?.id}
        dropdownDetails={dropdownDetails}
        manufacturerData={manufacturerData}
        vehicleData={vehicleData}
        />
        ))
    )
  }
  return (
    <div>
      <Tabs className="tabs -underline-2 js-tabs">
        <TabList className="sm:d-none md:d-none tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
          {dropdown.map((item, i) => (
            <Tab className="col-auto" key={i}>
              <button className="pb-2 tabs__button text-light-1 fw-500 js-tabs-button d-flex">
                <div className="w-25">
                  <img src={item?.icon} alt="icons" width={item?.iconWidth} />
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
              <div className="d-flex p-2 bd-highlight justify-content-between sm:d-block md:d-block">
                {typeof window !== "undefined" && window.innerWidth >= 992
                  ? dropdownComponent(item, "lg")
                  : dropdownComponent(item, "sm")}
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
