import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import isTextMatched from "../../utils/isTextMatched";

const CompareTwoVehicleBox = ({ item }) => {
  const vehicleOne = item?.id;
  const vehicleTwo = item?.compare_vehicle?.[0]?.id;
  const routeToRedirect = `/compare?vehicle_one=${vehicleOne}&vehicle_two=${vehicleTwo}`;

  return (
    <div className=" truck-card-compare ">
      <Link
        href={routeToRedirect}
        className="carCard -type-1 d-flex rounded-4 compare-card-link"
      >
        <div key={item?.id}>
          <div className="carCard__image">
            <div className="cardImage ratio  ratio-6:5">
              <div className="cardImage__content custom_inside-slider">
                {/* <div className="truck-card__image"> */}
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  slidesPerView={1}
                  allowSlidePrev={false}
                  allowSlideNext={false}
                >
                  <div style={{ minWidth: "500px" }}>
                    {item?.images?.map((slide, i) => (
                      <SwiperSlide key={i}>
                        <div className="compare-image">
                          <img
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={slide?.thumbnail}
                            alt="image"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          {/* End .tourCard__image */}

          <div className="carCard__content px-3 py-4   ">
            <h4 className="text-dark-1 text-14 lh-14 fw-500">{item?.title} </h4>
            <p className="text-light-1 lh-14 text-14 mt-5" />

            {/* End .row */}
            <div className="d-flex align-content-center align-items-center justify-content-between  ">
              <div>
                <div className="text-light-1 text-14 ">
                  <span className="fw-600 text-15 text-dark-1">
                    ₹ {item?.min_price}
                  </span>{" "}
                  Onwards
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-35">
          <Image
            width={30}
            height={30}
            className="compare-vs"
            src="/icons/vs.png"
            alt="image"
          />
        </div>
        {/* Next Card  */}
        {item?.compare_vehicle?.map((vehicle) => {
          return (
            <div
              key={vehicle?.id}
              data-aos="fade"
              data-aos-delay={vehicle?.delayAnimation}
            >
              <div className="carCard__image">
                <div className="cardImage ratio  ratio-6:5">
                  <div className="cardImage__content custom_inside-slider">
                    <Swiper
                      className="mySwiper"
                      slidesPerView={1}
                      allowSlidePrev={false}
                      allowSlideNext={false}
                    >
                      <SwiperSlide>
                        <div className="compare-image">
                          <img
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={vehicle?.images?.[0]?.thumbnail}
                            alt="image"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase  ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
              {/* End .tourCard__image */}

              <div className="carCard__content px-3 py-4">
                <h4 className="text-dark-1 text-14 lh-14 fw-500">
                  {item?.title}{" "}
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5" />

                {/* End .row */}
                <div className="d-flex align-content-center align-items-center justify-content-between  ">
                  <div>
                    <div className="text-light-1 text-14 ">
                      <span className="fw-600 text-15 text-dark-1">
                        ₹ {item?.min_price}
                      </span>{" "}
                      Onwards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Link>
      <div className="d-flex justify-content-lg-center pb-2 px-2  ">
        <button className="btn btn-primary flex-fill  ">Compare Now</button>
      </div>
    </div>
  );
};

export default CompareTwoVehicleBox;
