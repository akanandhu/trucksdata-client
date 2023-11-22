import AxelFilter from "./filters/AxelFilter";
import ChasisFilter from "./filters/ChasisFilter";
import LoadingSpanFilters from "./filters/LoadingSpanFilters";
import PayloadFilter from "./filters/PayloadFilter";
import PriceFilter from "./filters/PriceFilter";
import Status from "./filters/Status";
import Tyres from "./filters/Tyres";
import VariantFilter from "./filters/VariantFilter";

const Sidebar = ({sideParams, setSideParams}) => {

  const paramsProps = {
    sideParams,setSideParams
  }

  return (
    <>
      <LoadingSpanFilters {...paramsProps} />
      <PriceFilter {...paramsProps} />
      <AxelFilter {...paramsProps} />
      <PayloadFilter {...paramsProps} />
      <ChasisFilter {...paramsProps} />
      <VariantFilter {...paramsProps} />
      <Tyres {...paramsProps} />
      <Status {...paramsProps} />
    </>
  );
};

export default Sidebar;
