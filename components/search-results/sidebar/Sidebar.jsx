import AxelFilter from "./filters/AxelFilter";
import ChasisFilter from "./filters/ChasisFilter";
import LoadingSpanFilters from "./filters/LoadingSpanFilters";
import PayloadFilter from "./filters/PayloadFilter";
import PriceFilter from "./filters/PriceFilter";
import VariantFilter from "./filters/VariantFilter";

const Sidebar = () => {
  return (
    <>
      <LoadingSpanFilters />
      <PriceFilter />
      <AxelFilter />
      <PayloadFilter />
      <ChasisFilter />
      <VariantFilter />
    </>
  );
};

export default Sidebar;
