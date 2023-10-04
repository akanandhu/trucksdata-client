import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/header-8";
import TopBreadCrumb from "../../components/car-single/TopBreadCrumb";
import carsData from "../../data/cars";
import SlideGallery from "../../components/details/gallery/SlideGallery";
import TruckDetails from "../../components/details/card/TruckDetails";
import SpecHighlights from "../../components/details/card/SpecHighlights";
import Specifications from "../../components/details/card/Specifications";
import PopularModals from "../../components/details/card/PopularModals";
import VideoBanner from "../../components/details/video-player/VideoBanner";
import Faq from "../../components/faq/Faq";
import ReviewProgress2 from "../../components/car-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../components/car-single/guest-reviews/DetailsReview2";
import ReplyFormReview2 from "../../components/car-single/ReplyFormReview2";
import ReplyForm from "../../components/car-single/ReplyForm";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import TruckDetailCard from "../../components/details/card/DetailCard";
import DetailCard from "../../components/details/card/DetailCard";
import DetailBox from "../../components/details/card/DetailBox";
import MoreVehicles from "../../components/details/more/MoreVehicles";
import SpecificationTable from "../../components/details/specification-table/SpecificationTable";

const SinglePage = () => {
  const router = useRouter();
  const [vehicle, setVehicle] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setVehicle(carsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle={vehicle?.title ?? "Variant View Page"} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <TopBreadCrumb data={vehicle} />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-24 fw-600">
                    {vehicle?.title}
                  </h1>
                  <div className="row x-gap-10 items-center pt-10">
                    <div className="row x-gap-5 items-center pt-5">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">Truck</div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          Goods Carrier
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End title and other info */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1 bg-light-2">
                        <i className="icon-share mr-10" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                {/* End col button group */}
              </div>

              <div className="">
                <SlideGallery />
              </div>
            </div>
            {/* End col-lg-8 left car gallery */}
            <div className="col-lg-4">
              <div className="d-flex justify-end">
                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                  <div className="row y-gap-15 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14 text-light-1  md:mt-20">
                        Starting From
                      </div>
                      <div className="text-24 lh-12 fw-600 mt-5">
                        ₹{vehicle.price}{" "}
                      </div>
                      <div className="text-14 text-light-1 mt-5">
                        Ex-showroom
                      </div>
                    </div>
                    {/* End .col-auto */}

                    {/* End .col-auto */}
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-20 pt-20">
                    <DetailBox />
                  </div>
                  {/* End .row */}
                </div>
                {/* End px-30 */}
              </div>
              {/* End d-flex */}
            </div>
          </div>

          {/* End .row */}
        </div>
        {/* End .containar */}
      </section>

      <section className="pt-40">
        <div className="container">
          {/* <div className="row"> */}
          <div className="md:col sm:col row">
            {/* <div className="d-flex justify-content-center"> */}
            {/* <h3 className="text-22 fw-500">Property highlights</h3> */}
            <div className="col-lg-8">
              <div className="view_bordershadow ps-4 pe-4 pt-15 pb-15">
                <h6 className="fw-500 text-22">Highlights</h6>
                <SpecHighlights />
              </div>
              <div className="mt-30 view_bordershadow ps-4 pe-4 pt-15 pb-15">
                <h6 className="fw-500 text-22">Specifications</h6>
                <Specifications />
              </div>
            </div>
            {/* <Overview /> */}
            <div className="col-lg-4 ms-10 d-flex  justify-content-end sm:mt-20 lg:mt-4 ">
              <PopularModals />
            </div>
          </div>

          {/* </div> */}
        </div>
        {/* </div> */}
      </section>

      <section className="pt-40 mb-40 container">
        <div className="view_bordershadow">
          <div className="container pt-20 pb-20 lg:px-30 sm:px-0">
            <div className="ms-3">
              <h4 className="mb-10">Specifications</h4>
            </div>
            <div className="w-100">
              <SpecificationTable />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 pt-40">
        <div className="container">
          {/* <h3 className="text-22 fw-500 mb-20">Car Location</h3> */}
          <div className=" rounded-4 overflow-hidden map-500">
            <VideoBanner />
          </div>
        </div>
      </section>
      {/* End Map */}

      <section className="pt-40 mb-40">
        <div className="container ">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-22 fw-500">
                FAQs about
                <br /> {vehicle?.title}
              </h2>
            </div>
            {/* End .row */}

            <div className="col-lg-8">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq about sections */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(SinglePage), {
  ssr: false,
});
