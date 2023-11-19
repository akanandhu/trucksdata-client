import Slider from "react-slick";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const TopBrands = (props) => {
  const { topBrandDetails } = props;
  const topBrandFilter = useSelector(
    (store) => store.topfilter.brands.currentTab
  );
  const [manufacturers, setManufacturers] = useState([]);
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: manufacturers?.length,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1099,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },

  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 520,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // };

  const topBrands = [
    {
      id: 1,
      logo: "/img/brands/brand-logo.jpg",
      brand: "Paris",
      price: "29.52",
      delayAnimation: "100",
      brand_name: "Ashok Leyland",
    },
    {
      id: 2,
      logo: "/img/brands/brand-logo.jpg",
      brand: "London",
      delayAnimation: "200",
      brand_name: "Bharat Benz",
    },
    {
      id: 3,
      logo: "/img/brands/brand-logo.jpg",
      brand: "Los Angeles",
      delayAnimation: "300",
      brand_name: "Volvo",
    },
    {
      id: 4,
      logo: "/img/brands/brand-logo.jpg",
      brand: "Amsterdam",
      delayAnimation: "400",
      brand_name: "Mahindra",
    },
    {
      id: 5,
      logo: "/img/brands/brand-logo.jpg",
      brand: "Istanbul",
      delayAnimation: "500",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
  ];

  useEffect(() => {
    
    const reducedBrand = topBrandDetails?.reduce((acc, current) => {
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
        {manufacturers?.slice(0, 8).map((item) => (
          <SwiperSlide key={item.id + item.name}>
            <Link
              href={`/`}
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
