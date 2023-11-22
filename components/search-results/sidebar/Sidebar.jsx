import AxelFilter from "./filters/AxelFilter";
import ChasisFilter from "./filters/ChasisFilter";
import LoadingSpanFilters from "./filters/LoadingSpanFilters";
import PayloadFilter from "./filters/PayloadFilter";
import PriceFilter from "./filters/PriceFilter";
import Status from "./filters/Status";
import Tyres from "./filters/Tyres";
import VariantFilter from "./filters/VariantFilter";

const Sidebar = ({ sideParams, setSideParams, specifications }) => {
  const paramsProps = {
    sideParams,
    setSideParams,
  };

  const loadingSpan = specifications?.find(
    (item) => item?.name === "Loading Span (ft) / Loading Capacity (Cu.M)"
  );

  const axelConfig = specifications?.find(
    (item) => item?.name === "No of Axle (Nos)"
  );

  const chasisOptions = specifications?.find(
    (item) => item?.name === "Chassis Option"
  );

  const variantOptions = specifications?.find(
    (item) => item?.name === "Variant Options"
  );

  const statusOptions = specifications?.find((item) => item?.name === "Status");
  const payloadOptions = specifications?.find(
    (item) => item?.name === "Payload  (Kg)"
  );

  return (
    <>
      <LoadingSpanFilters
        {...paramsProps}
        options={loadingSpan?.options ?? []}
        specId={loadingSpan?.id}
      />
      <PriceFilter {...paramsProps} />
      <AxelFilter
        {...paramsProps}
        options={axelConfig?.options ?? []}
        specId={axelConfig?.id}
      />
      <PayloadFilter {...paramsProps} specId={payloadOptions?.id} />
      <ChasisFilter
        {...paramsProps}
        options={chasisOptions?.options ?? []}
        specId={chasisOptions?.id}
      />
      <VariantFilter
        {...paramsProps}
        options={variantOptions?.options ?? []}
        specId={variantOptions?.id}
      />
      <Tyres {...paramsProps} />
      <Status
        {...paramsProps}
        options={statusOptions?.options ?? []}
        specId={statusOptions?.id}
      />
    </>
  );
};

export default Sidebar;
