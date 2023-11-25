import Image from "next/image";
import React from "react";

const ComparePlusButton = ({ index, vehicle }) => {
  const currentItem = vehicle?.find((item) => item.index === index);
  const logo = currentItem?.vehicle
    ? currentItem?.vehicle?.images?.[0]?.thumbnail
    : "";

  return (
    <div className="d-flex justify-content-center  mb-xl-4   ">
      <Image
        src={logo || "/img/compare/truck-compare.svg"}
        alt="illustration"
        width={250}
        height={200}
        style={{ objectFit: "cover", width: "100%", height: '240px' }}
        className="  "
      />
    </div>
  );
};

export default ComparePlusButton;
