import Slider from "react-slick";
import Link from "next/link";

const TopBrands = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  return (
    <Slider {...settings}>
      {topBrands.map((item) => (
        <div
          className="col-xl-2  col-lg-3 col-sm-8 truck-card border-2  p-3 rounded-3 "
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            // href="/dest"
            href={`/brands/${item.id}`}
            className="citiesCard -type-3 d-block text-center"
          >
            <div className="citiesCard__image size-120 rounded-full mx-auto">
              <img
                className="object-cover js-lazy"
                src={item.logo}
                alt="image"
              />
            </div>
            {/* <div className="citiesCard__content mt-20">
              <h4 className="text-12   lh-13 fw-500 text-dark-1">
                {item.brand_name?.toUpperCase()}
              </h4>
            </div> */}
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TopBrands;
