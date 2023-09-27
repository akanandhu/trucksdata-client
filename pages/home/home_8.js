import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer6 from "../../components/footer/footer-6";
import Header8 from "../../components/header/header-8";
import Hero8 from "../../components/hero/hero-8";
import BlockGuide from "../../components/home/home-8/BlockGuide";
import Testimonial from "../../components/testimonial/Testimonial";
import CounterDark from "../../components/counter/CounterDark";
import Brand from "../../components/brand/Brand";
import PopularCars from "../../components/home/home-8/PopularCars";
import Counter4 from "../../components/counter/Counter4";
import Faq from "../../components/faq/Faq";
import AppBanner from "../../components/home/home-8/AppBanner";
import Blog from "../../components/home/home-8/Blog";
import Link from "next/link";
import TopBrands from "../../components/top-brands/TopBrands";
import FilterHotelsTabs2 from "../../components/hotels/filter-tabs/FilterHotelsTabs2";
import FilterHotels2 from "../../components/hotels/FilterHotels2";
import TopFilter from "../../components/top-brands/TopFilter";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";

const home_8 = () => {
  const filterOptions = [
    { label: "Trucks", value: "trucks" },
    { label: "Tippers", value: "tippers" },
    { label: "Pick-ups", value: "pick_ups" },
    { label: "Trailers", value: "trailers" },
    { label: "3-Wheelers", value: "three_wheelers" },
    // add more options as needed
  ];

  const brandOptions = [
    { label: "Ashok Leyland", value: "ashok_leylands" },
    { label: "Bharat Benz", value: "bharat_benz" },
    { label: "Volvo", value: "volvo" },
    { label: "Mahindra", value: "mahindra" },
    { label: "Tata", value: "tata" },
    // add more options as needed
  ];

  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header8 />
      {/* End Header 8 */}

      <Hero8 />
      {/* End Hero 8 */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <BlockGuide />
          </div>
        </div>
      </section> */}
      {/* End Why Coose Us */}

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

          <div className="row y-gap-30 pt-40">
            <div className="tabs -pills-2 pt-12">
              <TopFilter filterOptions={filterOptions} />
            </div>
            <TopBrands />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className=" layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">Compare Data</h2>
              <p className="mt-40 lg:mt-20">Pick 2 trucks of your choice, then compare the data</p>

              <div className="d-inline-block mt-40 lg:mt-20">
                <a href="#" className="button -md -blue-1 bg-dark-1 text-white">
                  Compare Trucks <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">
                  <Counter4 />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial section */}

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
