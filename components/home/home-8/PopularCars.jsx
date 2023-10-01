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
            >
              
                <div className="carCard__image">
                  <div className="cardImage ratio border-light ratio-6:5">
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
                  {/* End cartImage */}

                  {/* <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div> */}

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

              <div className="carCard__content mt-10">
                <h4 className="text-dark-1 text-18 lh-16 fw-500">
                  {item?.title}{" "}
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5" />
                <div className="d-flex items-center lh-14 ">
                  <div className="text-14 text-light-1">{item?.location}</div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1 uppercase">
                    {item?.type}
                  </div>
                </div>

                {/* End .row */}
                <div className="d-flex align-content-center align-items-center justify-content-between  ">
                  <div>
                    <div className="mt-5">
                      <div className="text-light-1 text-14">
                       
                        <span className="fw-600 text-20 text-dark-1">
                          ₹ 45,00,000 - ₹ 85,00,000
                        </span>{" "}
                        
                      </div>
                    </div>
                  </div>
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
