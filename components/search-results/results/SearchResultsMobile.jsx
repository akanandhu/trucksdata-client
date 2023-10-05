import React from "react";
import rentalssData from "../../../data/rentals";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const SearchResultsMobile = () => {
  return (
    <>
      {rentalssData.map((item) => (
        <Link
          key={item.id}
          href={`/details/${item.id}`}
          className="carCard -type-1 d-block rounded-4 hover-inside-slider"
        >
          <div
            key={item?.id}
            data-aos="fade"
            data-aos-delay={item?.delayAnimation}
            className="truck-card w-full "
          >
            <div className="truck-card__image">
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
                    <img
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

            <div className="truck-card__content">
              <div className="truck-card__details">
                <div className="truck-card__location"></div>
                <div className="truck-card__divider" />
                <div className="truck-card__type">{item?.type}</div>
              </div>
              <h4 className="truck-card__title ">{item?.title}</h4>

              <div className="truck-card__price-range">
                <span className="truck-card__price text-blue-1">
                  ₹75,00,000{" "}
                </span>
                <span className="truck-card__price-label text-13 text-secondary ">
                  Onwards
                </span>
              </div>
              <div className="d-flex w-auto mt-5 ">
                <button className=" btn btn-primary d-flex justify-content-center   flex-grow-1 text-center  ">
                  View More
                </button>
                
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SearchResultsMobile;
