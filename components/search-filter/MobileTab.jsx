import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTab } from "../../features/hero/findPlaceSlice";
const MobileTab = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  return (
    <div className="tabs -bookmark js-tabs d-md-none ">
      {console.log("Tabs ", tabs)}
      <div className="tabs__controls d-flex items-center js-tabs-controls">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            className={`d-flex tabs__button px-30 py-20 rounded-4 fw-600 text-black js-tabs-button ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => dispatch(addCurrentTab(tab?.name))}
          >
            {/* <div>
              <img
              src={tab?.icon}
              alt="icons"
              width='50px'
              />
              ix
            </div> */}
            <div>{tab?.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileTab;
