import { useState } from "react";

const BrandIntro = ({description}) => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    
    <>
      <div className="col-xl-8">
        <p className="text-15 text-dark-1">
          {showMore ? description : `${description?.substring(0, 545)}`}
        </p>
        <a
          // href="#"
          className="d-block text-14 fw-500 text-blue-1 underline mt-20"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <span>Show less</span> : <span>Show more</span> }
        </a>
      </div>
    </>
  );
};

export default BrandIntro;
