import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../../components/common/Seo";
import Banner from "../../components/destinations/components/Banner";
import BrandIntro from "../../components/destinations/components/BrandIntro";
import Categories from "../../components/destinations/components/Categories";
import Faq from "../../components/faq/Faq";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import UpcomingTrucks from "../../components/trucks/UpcomingTrucks";
import MainHeader from "../../components/header/main-header";

const SingleBrand = () => {
  return (
    <>
      <Seo pageTitle="Brands" />

      <div className="header-margin"></div>

      <MainHeader />

      <section
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
      >
        <div className="container">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                <div className="col-auto">
                  <div>Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-sm">
        <div className="container">
          <div className="row">
            <Banner />
          </div>

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10 layout-pb-sm">
            <Categories />
          </div>

          <div className="container view_bordershadow bg-white p-4">
            <div className="row y-gap-20 px-10 pt-5">
              <div className="col-auto">
                <h2>About Bharath Benz</h2>
              </div>
            </div>
            <div className="row y-gap-20 px-10">
              <BrandIntro />
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-sm layout-pt-sm">
        <div className="container view_bordershadow bg-white p-4 ">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Recommended Trucks By Barath Benz
                </h2>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row pt-40 sm:pt-20 item_gap-x30">
            <UpcomingTrucks />
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container view_bordershadow bg-white p-4">
          <div className="row y-gap-22 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Most Popular Trucks By Bharath Benz
                </h2>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <UpcomingTrucks />
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container view_bordershadow bg-white p-4">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Trending Trucks By Bharath Benz
                </h2>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <UpcomingTrucks />
          </div>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-sm">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                Bharat Benz
              </h2>
            </div>

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(SingleBrand), {
  ssr: false,
});
