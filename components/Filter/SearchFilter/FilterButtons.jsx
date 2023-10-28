import { useState } from "react";

const ButtonFilter = ({ filters }) => {
  // for start and guest rating code
  const [activeRating, setActiveRating] = useState(0);

  const handleRatingClick = (rating) => {
    setActiveRating(rating);
  };
  
  return (
    <>
      <div className="row x-gap-10 y-gap-10 pt-10">
        {filters.map((filter) => (
          <div className="col-auto" key={filter.label}>
            <button
              className={`button -blue-1 bg-blue-1-05 text-blue-1 py-10 px-20 rounded-100 ${
                activeRating === filter.value ? "active" : ""
              }`}
              onClick={() => handleRatingClick(filter.value)}
            >
              {filter.label}
            </button>
          </div>
        ))}
      </div>
      {/* End .col-auto guest ratings */}
    </>
  );
};

export default ButtonFilter;
