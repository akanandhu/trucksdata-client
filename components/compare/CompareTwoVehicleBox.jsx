import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import isTextMatched from "../../utils/isTextMatched";

const CompareTwoVehicleBox = ({ item }) => {
  return (
    <div className="border-light">
      <Link
        href={`/car/car-single/${item.id}`}
        className="carCard -type-1 d-flex rounded-4 hover-inside-slider "
      >
        <div
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="carCard__image">
            <div className="cardImage ratio  ratio-6:5">
              <div className="cardImage__content custom_inside-slider">
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={300}
                        height={300}
                        className="rounded-4 col-12 js-lazy"
                        src={slide}
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
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
                    ₹ 45,00,000
                  </span>{" "}
                  Onwards
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Card  */}
        <div
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="carCard__image">
            <div className="cardImage ratio  ratio-6:5">
              <div className="cardImage__content custom_inside-slider">
                <Swiper
                  className="mySwiper"
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={300}
                        height={300}
                        className="rounded-4 col-12 js-lazy"
                        src={slide}
                        alt="image"
                      />
                    </SwiperSlide>
                  ))}
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

          <div className="carCard__content px-3 py-4 ">
            <h4 className="text-dark-1 text-14 lh-14 fw-500">{item?.title} </h4>
            <p className="text-light-1 lh-14 text-14 mt-5" />

            {/* End .row */}
            <div className="d-flex align-content-center align-items-center justify-content-between  ">
              <div>
                <div className="text-light-1 text-14">
                  <span className="fw-600 text-15 text-dark-1">
                    ₹ 45,00,000
                  </span>{" "}
                  Onwards
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="d-flex justify-content-lg-center pb-2 px-2  ">
        <button className="btn btn-primary flex-fill  ">Compare Now</button>
      </div>
    </div>
  );
};

export default CompareTwoVehicleBox;
