import Link from "next/link";
import React from "react";

const DescriptionBox = () => {
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Tower of London",
    text: ` Learn about British history at the Tower of London, a medieval
              castle that was first built in 1066 by William the Conqueror.`,
    delayAnimation: "300",
  };

  return (
    <div
      className="col-lg-12 px-lg-5"
      key={item.id}
      data-aos="fade"
      data-aos-delay={item.delayAnimation}
    >
      <div className="rounded-4 border-light">
        <div className="d-flex flex-wrap y-gap-30">
          <div className="col-auto"></div>
          <div className="col">
            <div className="d-flex flex-column justify-center h-full px-30 py-20">
              <h3 className="text-22 fw-500">{item.title}</h3>
              <p className="text-15 mt-5">{item.text}</p>
              <Link
                href="#"
                className="d-block text-14 text-blue-1 fw-500 underline mt-5"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
