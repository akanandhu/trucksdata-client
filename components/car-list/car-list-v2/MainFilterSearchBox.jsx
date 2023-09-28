import { dropdown } from "../../hero/hero-8/DropdownItems";
import DateSearch from "../common/DateSearch";
import GuestSearch from "./GuestSearch";
import SearchType from "./SearchType";
import LocationSearch from "./SearchType";

const vehicleSearchContent = [
  {
    id: 1,
    name: "Manufacturer",
    sub_heading: "Search by manufacturers",
  },
  {
    id: 2,
    name: "Body Type",
    sub_heading: "Search by body type",
  },
  {
    id: 3,
    name: "Application",
    sub_heading: "Search by application",
  },
  {
    id: 4,
    name: "Gross Vehicle Weight",
    sub_heading: "Search by gross vehicle weight",
  },
  {
    id: 5,
    name: "Power Source",
    sub_heading: "Search by power source",
  },
];

const data = [
  {
    id: 1,
    name: "Manufacturer",
    sub_heading: "Search  manufacturers",
  },
  {
    id: 2,
    name: "Model",
    sub_heading: "Search  model",
  },
];

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <SearchType filterHeading={"Search By"} data={vehicleSearchContent} />
        </div>
      </div>

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <SearchType filterHeading={"Select Option"} data={data} />
        </div>
      </div>

      <div className="col-12">
        <div className="px-20 py-10 bg-white border-light rounded-4">
          <SearchType filterHeading={"Select Option"} data={data} />
        </div>
      </div>

      <div className="col-12">
        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1">
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
