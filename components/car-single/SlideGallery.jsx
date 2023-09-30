import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

const slides = [
  "/img/cars/truck-white.jpg",
  "/img/cars/truck-white.jpg",
  "/img/cars/truck-white.jpg",
];

export default function SlideGallery() {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <section className="slider">
      <div className="carsSlider mt-40">
        <div className="carsSlider-slides js-cars-slides">
          <div className="slider__thumbs">
            <Swiper
              onSwiper={setImagesNavSlider}
              direction="vertical"
              spaceBetween={10}
              slidesPerView={4}
              className="swiper-container1"
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "vertical",
                },
              }}
              modules={[Navigation, Thumbs]}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider__image">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide>
                <div className="slider__image">
                  <img src="/img/cars/truck-white.jpg" alt="" />
                  {/* <iframe
                    // width="420"
                    // height="315"
                    src="https://www.youtube.com/embed/aNrr70yud6k&autoplay=1"
                  ></iframe> */}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="carsSlider-slider">
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "horizontal",
              },
            }}
            className="swiper-container2"
            modules={[Navigation, Thumbs, Mousewheel]}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="slider__image">
                    <img src={slide} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}

            <SwiperSlide>
              <div className="slider__image w-100 h-100">
                <ReactPlayer
                url='https://www.youtube.com/watch?v=tb4oJnar4pg'
                // style={{height:'100%',width:''}}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
