import { useDispatch, useSelector } from "react-redux";
import { clearAllCompare } from "../../features/compare/compareSlice";

const CompareBar = () => {
  const compareItems = useSelector((store) => store.compare.vehicles);
  const dispatch = useDispatch();

  function handleDeselect() {
    dispatch(clearAllCompare());
  }

  return compareItems.length ? (
    <div className="compare-bar">
      <div className="compare-info">
        Selected 0{compareItems?.length} Variants to Compare
      </div>
      <div className="button-container">
        <button onClick={handleDeselect} className="deselect-btn text-black">
          Deselect All
        </button>
        <button className="compare-btn bg-blue-1 text-white">Compare</button>
      </div>
    </div>
  ) : null;
};

export default CompareBar;
