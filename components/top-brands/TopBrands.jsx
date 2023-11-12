import Slider from "react-slick";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const TopBrands = (props) => {
  const { topBrandDetails } = props;
  const topBrandFilter = useSelector((store) => store.topfilter.brands.currentTab );
  const [manufacturers,setManufacturers] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: manufacturers?.length,
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
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
      brand_name: "Tata",
    },
    {
      id: 6,
      logo: "/img/brands/brand-logo.jpg",
      delayAnimation: "600",
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
    console.log("Tab change !",topBrandDetails);
    // const filteredBrand = topBrandDetails?.filter((item) => item.name === topBrandFilter);
    // console.log("Filtered brand ",filteredBrand);
    const reducedBrand = topBrandDetails?.reduce((acc,current)=>{
      if(current.name === topBrandFilter){
        acc = current;
      }
      return acc;
    })
    setManufacturers(reducedBrand?.manufacturers);
  }, [topBrandFilter])
  


  return (
    <Slider 
    {...settings}
    >
    
      {manufacturers?.map((item,i) => (
        <div
          className="col-xl-2  col-lg-3 col-sm-8 border-2 truck-card p-3 rounded-3 d-flex justify-content-center"
          // className="bg-primary w-25"
          key={i}
          data-aos="fade"
          data-aos-delay={i*100}
        >
          <Link
            href={`/brands/${item.id}`}
            // className="citiesCard -type-3 d-block text-center"
          >
            <div 
            // className="citiesCard__image size-60 rounded-full mx-auto"
            >
              <img
                className="object-cover js-lazy"
                src={item.logo[0].thumbnail}
                // src={item.logo}
                alt="image"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TopBrands;
  