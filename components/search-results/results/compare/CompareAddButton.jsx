import React, { useState } from "react";

const CompareAddButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  console.log(isChecked, "isCheck");

  return (
    <button className="btn btn-primary " checked={isChecked} onClick={handleToggle}>
        <div className="custom-radio">
          {isChecked ? (
        <span>&#10003; Added to Compare</span>
      ) : (
        <span>Add to Compare</span>
      )}
        </div>
      
    </button>
  );
};

export default CompareAddButton;
