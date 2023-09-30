import AminitesFilter from "../../rental-list/sidebar/AminitesFilter";
import GuestRatingFilters from "../../rental-list/sidebar/GuestRatingFilters";
import PirceSlider from "../../rental-list/sidebar/PirceSlider";
import TypePlace from "../../rental-list/sidebar/TypePlace";
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
