import Slider from "react-slick";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import useVehicleTypes from "../../services/useVehicleTypes";

const TopBrands = (props) => {
  const { topBrandDetails } = props;
  const topBrandFilter = useSelector(
    (store) => store.topfilter.brands.currentTab
  );
  const [manufacturers, setManufacturers] = useState([]);

  const { data: vehicle } = useVehicleTypes();

  const brandDetails = vehicle?.data?.data?.find(
    (item) => item.name === topBrandFilter
  );

  useEffect(() => {
    const reducedBrand =
      topBrandDetails?.length &&
      topBrandDetails?.reduce((acc, current) => {
        if (current.name === topBrandFilter) {
          acc = current;
        }
        return acc;
      });
    setManufacturers(reducedBrand?.manufacturers);
  }, [topBrandFilter]);

  return (
    // <Slider
    // {...settings}
    // >
    //   {manufacturers?.map((item,i) => (
    //     <div
    //       // className="col-xl-2  col-lg-3 col-sm-8 border-2 truck-card p-3 rounded-3 d-flex justify-content-center"
    //       // className="bg-primary w-25"
    //       key={i}
    //       data-aos="fade"
    //       data-aos-delay={i*100}
    //     >
    //       <Link
    //         href={`/brands/${item.id}`}
    //         // className="citiesCard -type-3 d-block text-center"
    //       >
    //         <div
    //         // className="citiesCard__image size-60 rounded-full mx-auto"
    //         >
    //           {/* <img
    //             className="object-cover js-lazy"
    //             src={item.logo[0].thumbnail}
    //             // src={item.logo}
    //             alt="image"
    //             width={100}
    //             height={100}
    //           /> */}
    //           crd
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </Slider>

    <>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-brand-next",
          prevEl: ".js-popular-brand-prev",
        }}
        pagination={{
          el: ".js-brand-pag_active",
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
        {brandDetails?.manufacturers?.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id + item.name}>
            <Link
              href={`/brands/${item.id}`}
              // className="carCard -type-1 d-block rounded-4 hover-inside-slider"
              className="citiesCard -type-3 d-block text-center"
              data-aos="fade"
              // data-aos-delay={item.delayAnimation}
            >
              <div
                key={item.id + item.name}
                data-aos="fade"
                // data-aos-delay={item?.delayAnimation}
                className="brand-card"
              >
                <div
                  //  className="carCard__image truck-card-zoom"
                  className="brand-card__image size-120 rounded-full mx-auto w-50 my-12"
                >
                  <img
                    width={300}
                    height={300}
                    className="rounded-4 col-12 js-lazy"
                    src={item.logo[0].thumbnail}
                    alt="image"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-20 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-brand-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-brand-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-brand-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default TopBrands;
