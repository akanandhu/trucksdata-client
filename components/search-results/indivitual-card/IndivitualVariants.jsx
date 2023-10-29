import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import carsData from "../../../data/cars";
import Image from "next/image";
import CompareAddButton from "../results/compare/CompareAddButton";
import { useRouter } from "next/router";

const IndivitualVariants = ({ showError, setShow }) => {
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

  const router = useRouter() 

  function handleRoute (id) {
    router.push(`/details/${id}`)
  }

  return (
    <>
      {carsData.slice(0, 8).map((item) => (
        <div
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
          className=" my-3 bg-white  custom-shadow p-3 mx-2"
        >
          <Link
            key={item.id}
            href={`/details/${item.id}`}
            className=" d-flex rounded-4  "
          >
            <div className="truck-card__image w-100">
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
                    {/* <div className="w-75"> */}
                    <img
                      width={300}
                      height={300}
                      className="rounded-4 col-12 border-light  js-lazy"
                      src={slide}
                      alt="image"
                      />
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Link>

          <div className="truck-card__content">
            <div className="truck-card__details">
              <div className="truck-card__location">{item?.location}</div>
              <div className="truck-card__divider" />
              <div className="truck-card__type">{item?.type}</div>
            </div>
            <h4 className="truck-card__title ">{item?.title}</h4>

            <div className="truck-card__price-range">
              <span className="truck-card__price text-blue-1">₹75,00,000 </span>
              <span className="truck-card__price-label text-13 text-secondary ">
                Onwards
              </span>
            </div>
           
            <div className="row y-gap-30 justify-between  indivitualCardGrid ">
                      {propertyContent.map((item) => (
                        <div className="col-md-auto col-12" key={item.id}>
                          <div className="d-block text-start">
                            <div className="text-12 lh-15">
                              <span className=" fw-semibold ">{item.name}</span>
                              <br /> {item.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
            
            <div className="d-flex flex-column gap-2 w-auto mt-5 ">
              
              <CompareAddButton
                vehicle={item}
                showError={showError}
                setShow={setShow}
              />
              <button onClick={() => handleRoute(item.id)} className=" btn btn-primary  bg-blue-1 d-flex justify-content-center   flex-grow-1 text-center  ">
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IndivitualVariants;
