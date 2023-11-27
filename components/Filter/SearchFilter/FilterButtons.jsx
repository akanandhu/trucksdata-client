import { useState } from "react";

const ButtonFilter = ({
  filters,
  sideParams,
  setSideParams,
  label,
  specId,
}) => {
  // for start and guest rating code
  const [activeRating, setActiveRating] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const handleRatingClick = (rating) => {
    const newRating = activeRating === rating ? 0 : rating;
    setActiveRating(newRating);
    setSideParams({
      ...sideParams,
      [label]: newRating,
      [`${label}_spec_id`]: specId,
    });
    setRefresh((refresh) => refresh + 1);
  };

  return (
    <>
      <div className="row x-gap-10 y-gap-10 pt-10">
        {filters.map((filter) => {
          console.log(filter.value, "filterCheck");
          return (
            <div className="col-auto" key={filter.label}>
              <button
                key={`refresh_${refresh}`}
                className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${
                  activeRating === filter.value
                    ? "active"
                    : activeRating === 0
                    ? "none"
                    : ""
                }`}
                onClick={() => handleRatingClick(filter.value)}
              >
                {filter.label}
              </button>
            </div>
          );
        })}
      </div>
      {/* End .col-auto guest ratings */}
    </>
  );
};

export default ButtonFilter;
