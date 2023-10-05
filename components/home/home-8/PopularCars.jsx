import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import carsData from "../../../data/cars";
import CompareButton from "../../truck-card/CompareButton";
import isTextMatched from "../../../utils/isTextMatched";

const PopularCars = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {carsData.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/details/${item.id}`}
              className="carCard -type-1 d-block rounded-4 hover-inside-slider"
            >
              <div
                key={item?.id}
                data-aos="fade"
                data-aos-delay={item?.delayAnimation}
                className="truck-card"
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
                    <div className="truck-card__location">{item?.location}</div>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default PopularCars;
