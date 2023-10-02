import Slider from "react-slick";
// import { ShoppingCart } from '@flaticon/flaticon-uicons';

const Categories = () => {

  const catContent = [
    { id: 1, icon: '/icons/tipper.png', catName: "Tippers"},
    { id: 2, icon: '/icons/truck-wheel.svg', catName: "Trucks" },
    { id: 4, icon: "/icons/pick-up-truck.png", catName: "Pick-ups" },
    { id: 5, icon: "/icons/trailer.png", catName: "Trailers" },
    
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: catContent.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: catContent.length,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
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

  
  return (
    <Slider {...settings}>
      {catContent.map((item) => (
        <div className="col" key={item.id}>
          <button className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
            {/* <i className={`${item.icon} text-25 mb-10`} /> */}
            <div className="pb-20 w-25" >
            <img
            src={item.icon}
            
            />
            </div>
            {/* {item.icon} */}
            {item.catName}
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default Categories;
