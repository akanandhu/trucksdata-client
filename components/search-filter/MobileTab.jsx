import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTab } from "../../features/hero/findPlaceSlice";
import { handleTabChange } from "../../functions/filter/handleTabChange";
const MobileTab = ({ setCurrTab, specifications }) => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  function handleTab(tab, i) {
    dispatch(addCurrentTab(tab?.name));
    handleTabChange(tab, i, setCurrTab, specifications);
  }

  return (
    <div className="tabs -bookmark js-tabs d-md-none ">
      <div className="tabs__controls d-flex items-center js-tabs-controls">
        {tabs?.map((tab, i) => (
          <button
            key={tab?.id}
            className={`d-flex justify-content-center flex-column tabs__button px-10 py-10 rounded-4 fw-600 text-black js-tabs-button ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => handleTab(tab, i)}
          >
            <div>
              <img src={tab?.icon} alt="icons" width={tab?.iconWidth} />
            </div>
            <div>{tab?.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileTab;
