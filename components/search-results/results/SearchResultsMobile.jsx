import React from "react";
import rentalssData from "../../../data/rentals";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import IndivitualVariants from "../indivitual-card/IndivitualVariants";
import Spinner from "../../loading/Spinner";

const SearchResultsMobile = ({ setShow, showError, vehicles, ref, isLoading }) => {
  return (
    <>
        <IndivitualVariants
          vehicles={vehicles}
          setShow={setShow}
          showError={showError}
        />
        <div ref={ref}></div>
              {isLoading && (
                <div className="mt-20">
                  <Spinner />
                </div>
              )}
    </>
  );
};

export default SearchResultsMobile;
