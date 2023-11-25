import Image from "next/image";
import React from "react";

const ComparePlusButton = ({ index, vehicle }) => {
  const currentItem = vehicle?.find((item) => item.index === index);
  const logo = currentItem?.vehicle
    ? currentItem?.vehicle?.images?.[0]?.thumbnail
    : "";

  return (
    <div className="d-flex justify-content-center h-100 w-100  mb-xl-4   ">
      <Image
        src={logo || "/img/compare/truck-compare.svg"}
        alt="illustration"
        width={250}
        height={200}
        
        className="  "
      />
    </div>
  );
};

export default ComparePlusButton;
