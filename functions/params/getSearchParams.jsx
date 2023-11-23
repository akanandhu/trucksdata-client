export function getSearchParams(tabs, opt1, opt2, opt3) {
  const params = {};
  if (tabs) {
    if (tabs?.name === "Manufacturer") {
      params.vehicle_type = opt1.id;
      params.manufacturer = opt2.id;
    } else if (tabs?.name === "Application") {
      params.vehicle_type = opt1.id;
      params.application = [tabs?.spec_id, opt2.id, opt3.id]
        .filter(Boolean)
        .join(",");
    } else if (tabs?.name === "G V W") {
      params.vehicle_type = opt1.id;
      params.gvw = [tabs?.spec_id, opt2.id].filter(Boolean).join(",");
    } else if (tabs?.name === "Power Source") {
      params.vehicle_type = opt1.id;
      params.energy_source = opt2?.id;
    }
  }

  return {
    params,
  };
}
