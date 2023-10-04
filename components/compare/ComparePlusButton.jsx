import Image from "next/image";
import React from "react";

const ComparePlusButton = () => {
  return (
    <div className="d-flex justify-content-center rounded-circle mb-xl-4   ">
      <Image
        src={"/img/compare/truck-compare.svg"}
        alt="illustration"
        width={250}
        height={200}
        className=" rounded-circle "
      />
    </div>
  );
};

export default ComparePlusButton;
