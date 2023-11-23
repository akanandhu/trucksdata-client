function getBasicTableData(datas) {
  console.log(datas, "datasCheck");
  const basicTableData = [
    {
      item: "Manufacturer Name",
      option_one: datas?.[0]?.manufacturer?.name ?? "-",
      option_two: datas?.[1]?.manufacturer?.name ?? "-",
      option_three: datas?.[2]?.manufacturer?.name ?? "-",
    },
    {
      item: "Power Source",
      option_one: datas?.[0]?.energy_source?.name ?? "-",
      option_two: datas?.[1]?.energy_source?.name ?? "-",
      option_three: datas?.[2]?.energy_source?.name ?? "-",
    },
    {
      item: "Category",
      option_one: datas?.[0]?.category_name ?? "-",
      option_two: datas?.[1]?.category_name ?? "-",
      option_three: datas?.[2]?.category_name ?? "-",
    },
    {
      item: "Min-Price",
      option_one: datas?.[0]?.min_price
        ? `₹${Math.floor(datas?.[0]?.min_price)}`
        : "-",
      option_two: datas?.[1]?.min_price
        ? `₹${Math.floor(datas?.[1]?.min_price)}`
        : "-",
      option_three: datas?.[2]?.min_price
        ? `₹${Math.floor(datas?.[2]?.min_price)}`
        : "-",
    },
  ];
  return basicTableData;
}

function getIcon(index) {
  const icons = {
    1: "/icons/delivery-truck.png",
    2: "/icons/engine.png",
    3: "/icons/transmissions.svg",
    4: "/icons/suspension.png",
    5: "/icons/braking.png",
    6: "/icons/wheels.png",
    7: "/icons/electric-truck.png",
    8: "/icons/endurance.png",
    9: "/icons/tipper.png",
    10: "/icons/pick-up-truck.png",
  };

  return icons[index] || "/icons/pick-up-truck.png";
}

function getCollapseTarget(index) {
  const collapseTarget = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
  };

  return collapseTarget[index] || `Number${index}`;
}

function itemInFormat(data, isViewPage) {
  const itemInFormat = data?.map((item) => {
    const values = item?.values?.map((obj) => {
      return obj?.value;
    });

    return {
      item: item?.item,
      option_one: values?.[0] || "-",
      option_two: values?.[1] || "-",
      option_three: values?.[2] || "-",
      ...(isViewPage && { option_four: values?.[3] || "-" }),
    };
  });

  return itemInFormat;
}

function getTableData(id, specifications, compareData, isViewPage) {
  function matchAndGenerateOutput(firstArray, secondArray) {
    const output = [];

    secondArray?.forEach((obj) => {
      obj?.vehicle_specs.forEach((spec) => {
        const match = firstArray.find(
          (item) => item.item === spec?.specification?.name
        );
        if (match && spec?.values !== null) {
          const newItem = {
            item: match.item,
            values: spec?.values,
          };
          for (let i = 2; i <= 4; i++) {
            const optionKey = `option_${i}`;
            if (spec[optionKey]) {
              newItem[optionKey] = spec[optionKey];
            }
          }

          output.push(newItem);
        }
      });
    });

    return output;
  }

  const data = specifications?.map((spec) => {
    if (spec?.specification_category_id === id) {
      return {
        item: spec?.name,
      };
    }
  });

  const itemData = matchAndGenerateOutput(data, compareData);
  const itemDataWithOptions = itemInFormat(itemData, isViewPage);

  return itemDataWithOptions;
}

export const getSpecCompareData = (compareData, specCategory, isViewPage) => {
  const specContent = [
    {
      id: 1,
      collapseTarget: "Zero",
      title: "Basic Information",
      hasVariant: isViewPage ? false : true,
      tableData: getBasicTableData(compareData),
      icon: "/icons/delivery-truck.png",
    },
    ...(specCategory &&
      specCategory?.map((spec, index) => {
        const tableData = getTableData(
          spec?.id,
          spec?.specifications,
          compareData,
          isViewPage
        );

        return {
          id: spec?.id,
          title: spec?.name,
          icon: getIcon(index + 1),
          hasVariant: isViewPage && spec?.id !== 1 ? false : true,
          tableData: tableData,
          collapseTarget: getCollapseTarget(index),
        };
      })),
  ];

  return specContent;
};
