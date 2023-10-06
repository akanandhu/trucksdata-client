import React from "react";
import rentalssData from "../../../data/rentals";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import IndivitualVariants from "../indivitual-card/IndivitualVariants";

const SearchResultsMobile = ({ setShow, showError }) => {
  return (
    <>
      {rentalssData.map((item) => (
        <IndivitualVariants
          key={item.id}
          item={item}
          setShow={setShow}
          showError={showError}
        />
      ))}
    </>
  );
};

export default SearchResultsMobile;
