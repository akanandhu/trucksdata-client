import React from "react";
import { BiSolidFactory } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";

function getManufacturerByVehicleType(currentTab, filterParam, bodyTypes) {
  const isManufacturer =
    currentTab?.item?.tabItem === "Manufacturer" ||
    currentTab === undefined ||
    currentTab?.item?.name === "Manufacturer";

  if (isManufacturer) {
    const bodyType = filterParam?.option1;
    const selected = bodyTypes?.find(
      (manufacturer) => manufacturer?.name === bodyType?.name
    );

    return selected?.manufacturers || [];
  }

  return [];
}

function getChildApps({ currTab, filterParam, parentApps }) {
  const isApplication =
    currTab?.item?.tabItem === "Application" ||
    currTab?.item?.name === "Application";
  if (isApplication) {
    const parentObj = filterParam?.option2;
    const selected = parentApps?.find(
      (parent) => parent.option === parentObj?.option
    );

    return selected?.child_options || [];
  }
}

function getPowerSources({ currTab, filterParam, bodyTypes }) {
  const isPower =
    currTab?.item?.tabItem === "Power Source" ||
    currTab?.item?.name === "Power Source";
  if (isPower) {
    const vehicleObj = filterParam?.option1;
    const selected = bodyTypes?.find((type) => type.name === vehicleObj?.name);

    return selected?.energy_sources || [];
  }
}

function getDropDown({
  manufacturers,
  bodyTypes,
  currTab,
  filterParam,
  specifications,
  queryValues,
}) {
  const manufacturer = getManufacturerByVehicleType(
    currTab,
    filterParam,
    bodyTypes
  );

  const application = specifications?.find(
    (spec) => spec?.name === "Applications"
  );
  const { options } = application || {};
  const parentApps = options?.filter((option) => !option?.parent_option_id);

  const gvw = specifications?.find(
    (spec) => spec?.name === "Gross Vehicle Weight (Kg)"
  );

  const childApps = getChildApps({
    currTab,
    filterParam,
    parentApps,
  });

  const powerSources = getPowerSources({
    currTab,
    filterParam,
    bodyTypes,
  });

  const dropdown = [
    {
      id: 0,
      tabItem: "Manufacturer",
      icon: "/icons/manufacture.png",
      iconWidth: "35px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "body_type",
          placeholder: "Select Body Type",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Manufacturer",
          name: "manufacturer",
          placeholder: "Select Manufacturer",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: manufacturer || [],
        },
      ],
    },
    {
      id: 1,
      tabItem: "Application",
      icon: "/icons/pick-up-truck.png",
      iconWidth: "45px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Application",
          name: "model",
          placeholder: "Select Application",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items:
            parentApps?.map((parent) => {
              return {
                ...parent,
                name: parent?.option,
              };
            }) || [],
        },
        {
          optionId: 3,
          title: "Sub-application",
          name: "model",
          placeholder: "Select Sub-application",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items:
            childApps?.map((child) => {
              return {
                ...child,
                name: child?.option,
              };
            }) || [],
        },
      ],
    },
    {
      id: 2,
      tabItem: "G V W",
      icon: "/icons/weight.png",
      iconWidth: "45px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "G V W option",
          name: "gvw",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items:
            gvw?.options?.map((item) => {
              return {
                ...item,
                name: item?.option,
              };
            }) || [],
        },
      ],
    },
    {
      id: 3,
      tabItem: "Power Source",
      icon: "/icons/diesel.png",
      name: "powersource",
      iconWidth: "25px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Power Source",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: powerSources || [],
        },
      ],
    },
  ];

  return dropdown || [];
}

export default getDropDown;
