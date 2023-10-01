import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";
import FilterTabs from "./FilterTabs";

const index = () => {
  return (
    <>
      <section className="masthead -type-8">
        <div className="masthead__bg">
          <img
            src="/img/masthead/8/bg.png"
            alt="image"
            className="col-12 h-full object-cover"
          />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-10">
              <div className="text-center">
                <h1
                  className="text-60 lg:text-40 md:text-30 text-dark-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Search for the Best Trucks
                </h1>
                <p
                  className="text-dark-1 mt-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Navigate India&apos;s Trucking Landscape With Ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div
          className="masthead-bottom mt-80 md:mt-2"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <MainFilterSearchBox />

          <div className="masthead-slider overflow-hidden js-masthead-slider-8">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{
                nextEl: ".hero8-next-active",
                prevEl: ".hero8-prev-active",
              }}
            >
              <SwiperSlide>
                <img className="lazy-load" src="/img/masthead/8/truck-hero.png" alt="image" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="lazy-load" src="/img/masthead/8/truck-hero-2.png" alt="image" />
              </SwiperSlide>
            </Swiper>

            {/* Start Slider Prev and Next */}
            <div className="masthead-slider__nav -prev">
              <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-prev-active">
                <i className="icon-arrow-left" />
              </button>
            </div>

            <div className="masthead-slider__nav -next">
              <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-next-active">
                <i className="icon-arrow-right" />
              </button>
            </div>
            {/* End Slider Prev and Next */}
          </div>
          {/* End image slider */}
        </div>
        {/* End masthead bottom slider */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
