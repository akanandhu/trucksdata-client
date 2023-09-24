import Slider from "react-slick";
import Link from "next/link";

const TopBrands = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const topBrands = [
    {
      id: 1,
      logo: "/img/destinations/5/1.png",
      brand: "Paris",
      price: "29.52",
      delayAnimation: "100",
    },
    {
      id: 2,
      logo: "/img/destinations/5/2.png",
      brand: "London",
      delayAnimation: "200",
    },
    {
      id: 3,
      logo: "/img/destinations/5/3.png",
      brand: "Los Angeles",
      delayAnimation: "300",
    },
    {
      id: 4,
      logo: "/img/destinations/5/4.png",
      brand: "Amsterdam",
      delayAnimation: "400",
    },
    {
      id: 5,
      logo: "/img/destinations/5/5.png",
      brand: "Istanbul",
      delayAnimation: "500",
    },
    {
      id: 6,
      logo: "/img/destinations/5/6.png",
      delayAnimation: "600",
    },
  ];

  return (
    <Slider {...settings}>
      {topBrands.map((item) => (
        <div
          className="col-xl-2 col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href="/destinations"
            className="citiesCard -type-4 d-block text-center"
          >
            <div className="citiesCard__image size-160 rounded-full mx-auto">
              <img
                className="object-cover js-lazy"
                src={item.logo}
                alt="image"
              />
            </div>
            <div className="citiesCard__content mt-10">
              <h4 className="text-18 lh-13 fw-500 text-dark-1">
                {item.brand_name}
              </h4>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TopBrands;
