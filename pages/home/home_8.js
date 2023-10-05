import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer6 from "../../components/footer/footer-6";
import Header8 from "../../components/header/header-8";
import Hero8 from "../../components/hero/hero-8";
import PopularCars from "../../components/home/home-8/PopularCars";
import Counter4 from "../../components/counter/Counter4";
import Faq from "../../components/faq/Faq";
import AppBanner from "../../components/home/home-8/AppBanner";
import Blog from "../../components/home/home-8/Blog";
import Link from "next/link";
import TopBrands from "../../components/top-brands/TopBrands";
import TopFilter from "../../components/top-brands/TopFilter";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";
import CompareVehicles from "../../components/compare/CompareVehicles";

const home_8 = () => {
  const filterOptions = [
    { label: "Trucks", value: "trucks" },
    { label: "Tippers", value: "tippers" },
    { label: "Pick-ups", value: "pick_ups" },
    { label: "Trailers", value: "trailers" },
    { label: "3-Wheelers", value: "three_wheelers" },
  ];

  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header8 />
      {/* End Header 8 */}

      <Hero8 />
      {/* End Hero 8 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
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

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter filterOptions={filterOptions} />
            </div>
            <PopularCars />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
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

          <div className="row y-gap-30 pt-40 item_gap-x30  ">
            <div className="tabs -pills-2 pt-12 ">
              <TopFilter filterOptions={filterOptions} />
            </div>
            <TopBrands />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <CompareVehicles filterOptions={filterOptions} />

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
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

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <div className="tabs -pills-2 pt-12">
              <TopFilter filterOptions={filterOptions} />
            </div>
            <UpcomingTrucks />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
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
            <div className="col-auto">
              <Link
                href="/blog/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
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

export default dynamic(() => Promise.resolve(home_8), { ssr: false });
