import Map from "../sidebar/Map";
import LocationFilters from "../sidebar/FilterCheckbox";
import PirceSlider from "../sidebar/PirceSlider";
import CategorieFilters from "../sidebar/CategorieFilters";
import SupplierFilters from "../sidebar/SupplierFilters";
import SpecificationsFilter from "../sidebar/SpecificationsFilter";
import MileageFilter from "../sidebar/MileageFilter";
import TransmissionFilter from "../sidebar/TransmissionFilter";
import FuelPolicyFilter from "../sidebar/FuelPolicyFilter";
import MainFilterSearchBox from "./MainFilterSearchBox";
import FilterCheckbox from "../sidebar/FilterCheckbox";

const loadingData = [
  {
    label: "15",
    count: 1,
  },
  {
    label: "17",
    count: 50,
  },
  {
    label: "20.1",
    count: 50,
  },
  {
    label: "20.9",
    count: 50,
  },
];

const axelData = [
  {
    label: "4X2",
    count: 20,
  },
];

const payloadData = [
  {
    label: "7650",
    count: 330,
  },
  {
    label: "7570",
    count: 1,
  },
  {
    label: "7525",
    count: 20,
  },
  {
    label: "7445",
    count: 111,
  },
];

const chasisData = [
  {
    label: "Cab & Chassis (CBC)",
    count: 1,
  },
]

const variantData = [
  {
    label: 'CBC',
    count: 20
  },
  {
    label: 'FSD',
    count: 100
  },
  {
    label: 'HSD',
    count: 120
  }
]

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-white border-light rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search</h5>
          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox />
          </div>
        </div>
      </div>
      {/* End main search filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">
          Loading Span (ft) / Loading Capacity (Cu.M)
        </h5>
        <div className="sidebar-checkbox">
          <FilterCheckbox filters={loadingData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Location filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Axle Configuartion</h5>
        <div className="sidebar-checkbox">
          <FilterCheckbox filters={axelData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Category filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Payload (Range)(Kg)</h5>
        <div className="sidebar-checkbox">
          <FilterCheckbox filters={payloadData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Chassis Options</h5>
        <div className="sidebar-checkbox">
          <FilterCheckbox filters={chasisData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Supplier filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Variant Options</h5>
        <div className="sidebar-checkbox">
          <FilterCheckbox filters={variantData} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Specifications filter */}


      {/* Place Ad here */}
      {/* End find map */}
    </>
  );
};

export default Sidebar;
