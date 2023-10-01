import rentalssData from "../../../data/rentals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import CompareAddButton from "./compare/CompareAddButton";

const SearchResults = () => {
  return (
    <>
      {rentalssData.map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage w-250 md:w-1/1 rounded-4">
                  <div className="cardImage-slider rounded-4  custom_inside-slider">
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
                          <div className=" ratio ratio-1:1">
                            <div className="cardImage__content">
                              <Image
                                width={250}
                                height={250}
                                className="rounded-4 col-12 js-lazy"
                                src={slide}
                                alt="image"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* End image */}
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <div className="d-flex flex-column h-full justify-start">
                  <div>
                    <h3 className="text-22 lh-16 fw-500">{item?.title}</h3>

                    <div className="row x-gap-5 items-center pt-5">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">Truck</div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          Goods Carrier
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="y-gap-5 pt-5 pb-5">
                    <div className="d-flex items-center">
                      <Image
                        className="mr-10"
                        src={"/icons/engine.svg"}
                        width={20}
                        height={20}
                      />

                      <div className="text-15">125 kW @ 2500 rpm</div>
                    </div>
                    <div className="d-flex items-center">
                      <Image
                        className="mr-10"
                        src={"/icons/gears.png"}
                        width={20}
                        height={20}
                      />

                      <div className="text-15">4X2</div>
                    </div>
                    <div className="d-flex items-center">
                      {/* <i className="icon-parking text-20 mr-10" /> */}
                      <Image
                        className="mr-10"
                        src={"/icons/fuel.svg"}
                        width={20}
                        height={20}
                      />
                      <div className="text-15">Diesel</div>
                    </div>
                    <div className="d-flex items-center">
                      <Image
                        className="mr-10"
                        src={"/icons/application.svg"}
                        width={20}
                        height={20}
                      />
                      <div className="text-15">Agriculture | Rice Truck</div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto d-flex flex-column justify-content-between  text-right md:text-left">
                <CompareAddButton />
                <div>
                  <div>
                    <div className="text-14 text-light-1  md:mt-20">
                      Starting From
                    </div>
                    <div className="text-24 lh-12 fw-600 mt-5">
                      ₹{item.price}{" "}
                    </div>
                    <div className="text-14 text-light-1 mt-5">Ex-showroom</div>
                  </div>
                  <Link
                    href={`/details/${item.id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24"
                  >
                    View More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
              {/* End col-md-auto */}
            </div>
            {/* End .row */}
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
