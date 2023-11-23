import rentalssData from "../../../data/rentals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import CompareAddButton from "./compare/CompareAddButton";
import Spinner from "../../loading/Spinner";

const SearchResults = ({ showError, setShow, vehicles, ref, isLoading }) => {
  const propertyContent = [
    {
      id: 1,
      icon: "/icons/power.svg",
      name: "Power",
      content: "180 HP",
    },
    {
      id: 2,
      icon: "/icons/weight.svg",
      name: "GVW",
      content: "41500 KG",
    },

    {
      id: 4,
      icon: "/icons/fuel-tank.svg",
      name: "Fuel Tank",
      content: "160 Ltr",
    },
  ];

  return (
    <>
      {vehicles?.map((item) => {
        console.log(item, "itemVehicle");
        const minPrice = Math.floor(item?.min_price ?? 0);
        const maxPrice = Math.floor(item?.max_price ?? 0);

        return (
          <div className="col-4" key={item?.id}>
            <div className="border-top-light pt-30">
              <div className="custom-shadow p-1 x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage  md:w-1/1 rounded-4">
                    <div className="cardImage-slider rounded-4  custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.images?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <div className=" ratio ratio-1:1">
                              <div className="cardImage__content">
                                <Image
                                  width={300}
                                  height={300}
                                  className="rounded-4 col-12 js-lazy"
                                  src={slide?.thumbnail}
                                  alt={"Image"}
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
                      <div className="row x-gap-5 items-center ">
                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            {item?.vehicle_type?.name ?? ""}
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="size-3 rounded-full bg-light-1" />
                        </div>
                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            {item?.manufacturer?.name ?? ""}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-18 lh-16 fw-500">{item?.title}</h3>
                      <div className="truck-card__price-range">
                        <span className="truck-card__price text-blue-1">
                          ₹{minPrice} - ₹{maxPrice}
                        </span>
                        <span className="truck-card__price-label text-13 text-secondary "></span>
                      </div>

                      <div className="row y-gap-30 justify-between pt-5 indivitualCardGrid ">
                        {propertyContent.map((item) => (
                          <div className="col-md-auto col-2" key={item.id}>
                            <div className="d-block text-start">
                              <div className="text-15 lh-15">
                                <span className=" fw-semibold ">
                                  {item.name}
                                </span>
                                <br /> {item.content}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
                {/* End col-md */}

                <div className="col-md-auto d-flex flex-column justify-content-between  text-right md:text-left">
                  <CompareAddButton
                    vehicle={item}
                    showError={showError}
                    setShow={setShow}
                  />
                  <div>
                    <Link
                      href={`/details/${item.id}`}
                      className="button -md -dark-1 bg-blue-1 text-white mt-2 "
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
        );
      })}
      <div ref={ref}></div>
      {isLoading && (
        <div className="mt-20">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default SearchResults;
