import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer6 from "../../components/footer/footer-6";
import SearchFilter from "../../components/Filter/SearchFilter";
import PopularTrucks from "../../components/home/PopularTrucks";
import Faq from "../../components/faq/Faq";
import AppBanner from "../../components/home/AppBanner";
import Blog from "../../components/home/Blog";
import TopBrands from "../../components/top-brands/TopBrands";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";
import CompareVehicles from "../../components/compare/CompareVehicles";
import MainHeader from "../../components/header/main-header";
import TopFilter from "../../components/top-brands/TopFilter";
import useManufactures from "../../services/useManufactures";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useDispatch, useSelector } from "react-redux";
import { setManufacturer } from "../../features/manufacturer/manufacturerSlice";
import { setVehiclesType } from "../../features/vehicleType/vehicleTypeSlice";
import { useState } from "react";
const Home = () => {
  const dispach = useDispatch();
  const filterOptions = [
    { label: "Trucks", value: "trucks" },
    { label: "Tippers", value: "tippers" },
    { label: "Pick-ups", value: "pick_ups" },
    { label: "Trailers", value: "trailers" },
    { label: "3-Wheelers", value: "three_wheelers" },
  ];

  const { data: manufacturer } = useManufactures();
  const { data: vehicle } = useVehicleTypes();

  dispach(setVehiclesType(vehicle?.data["data"]));
  dispach(setManufacturer(manufacturer?.data["data"]));

  return (
    <>
    {console.log('Vehicle ',vehicle?.data?.data)}
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <MainHeader vehicleData={vehicle?.data["data"]} />
      {/* End Header 8 */}

      <SearchFilter
        manufacturerData={manufacturer?.data["data"]}
        vehicleData={vehicle?.data["data"]}
      />
      {/* End Hero 8 */}

      <section className="layout-pt-md pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Models</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore the popular models
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter vehicleData={vehicle?.data["data"]} />
            </div>
            <PopularTrucks />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Brands</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular brands have a lot to variants to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-5 item_gap-x30  ">
            <div className="tabs -pills-2 pt-12 ">
              <TopFilter vehicleData={vehicle?.data["data"]} flag="brands"/>
            </div>
            <TopBrands topBrandDetails={vehicle?.data["data"]} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <CompareVehicles
        filterOptions={filterOptions}
        vehicleData={vehicle?.data["data"]}
      />

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Upcoming Models</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore the upcoming models
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-5 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter vehicleData={vehicle?.data["data"]} />
            </div>
            <UpcomingTrucks />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="pb-30">
        <div className="container view_bordershadow bg-white p-5">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get to know about latest trucks
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Read articles about trucks
                </p>
              </div>
            </div>
            {/* End .col */}
            {/* <div className="col-auto">
              <Link
                href="/blog/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div> */}
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Sections */}

      <AppBanner />
      {/* End AppBanner section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Explore FAQs</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <Footer6 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
