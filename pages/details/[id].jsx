import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import Seo from "../../components/common/Seo";
import TopBreadCrumb from "../../components/truck-single/TopBreadCrumb";
import carsData from "../../data/cars";
import SlideGallery from "../../components/details/gallery/SlideGallery";
import SpecHighlights from "../../components/details/card/SpecHighlights";
import Specifications from "../../components/details/card/Specifications";
import PopularModals from "../../components/details/card/PopularModals";
import VideoBanner from "../../components/details/video-player/VideoBanner";
import Faq from "../../components/faq/Faq";
import CallToActions from "../../components/common/CallToActions";
import DefaultFooter from "../../components/footer/default";
import DetailBox from "../../components/details/card/DetailBox";
import SpecificationTable from "../../components/details/specification-table/SpecificationTable";
import SimilarTrucks from "../../components/similar-trucks/SimilarTrucks";
import MainHeader from "../../components/header/main-header";
import useViewVehicle from "../../services/useViewVehicle";
import Footer from '../../components/footer/footer'
import useVehicle from "../../services/useVehicle";
import { useSelector } from "react-redux";
import useManufactures from "../../services/useManufactures";
import useVehicleTypes from "../../services/useVehicleTypes";

const SinglePage = () => {
  const router = useRouter();
  const [vehicle, setVehicle] = useState({});
  const id = router.query.id;

  // useEffect(() => {
  //   if (!id) <h1>Loading...</h1>;
  //   else setVehicle(carsData.find((item) => item.id == id));
  //   return () => {};
  // }, [id]);
  const filterId = useSelector((store) => store.topfilter["brands"]?.id);
  const { data: vehicleDetails } = useVehicle(filterId);

  const { data: vehicleData } = useViewVehicle(id);
  const {data: vehicletypes} = useVehicleTypes();

  const similarVehicle = vehicletypes?.data?.data.find((item) => item.name === vehicleData?.data?.vehicle_type?.name)
  const similarCategory = similarVehicle?.manufacturers.filter((item) => item.name === "Eicher");
  return (
    <>
      <Seo pageTitle={vehicleData?.data?.title ?? "Variant View Page"} />
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <MainHeader />
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
                    {vehicleData?.data?.title}
                  </h1>
                  <div className="row x-gap-10 items-center pt-10">
                    <div className="row x-gap-5 items-center pt-5">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {vehicleData?.data?.vehicle_type?.name}
                        </div>
                      </div>
                      {/* <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div> */}
                      {/* <div className="col-auto">
                        <div className="text-14 text-light-1">
                          Goods Carrier
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

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
              </div>

              <div className="">
                <SlideGallery slides={vehicleData?.data?.images} videos={vehicleData?.data?.video_links}/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-end">
                <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
                  <div className="row y-gap-15 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14 text-light-1  md:mt-20">
                        Starting From
                      </div>
                      <div className="text-24 lh-12 fw-600 mt-5">
                        ₹{vehicleData?.data["min_price"]}{" "}
                      </div>
                      <div className="text-14 text-light-1 mt-5">
                        Ex-showroom
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-20 pt-20">
                    <DetailBox vehicleDetails={vehicleData?.data} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End .row */}
        </div>
        {/* End .containar */}
      </section>

      <section className="pt-40">
        <div className="container ">
          {/* <div className="row"> */}
          <div className="md:col sm:col row">
            {/* <div className="d-flex justify-content-center"> */}
            {/* <h3 className="text-22 fw-500">Property highlights</h3> */}
            <div className="col-lg-8">
              <div className="view_bordershadow ps-4 pe-4 pt-15 pb-15 bg-white ">
                <h6 className="fw-500 text-22">Highlights</h6>
                <SpecHighlights vehicleDetails={vehicleData?.data} />
              </div>
              <div className="mt-30 view_bordershadow ps-4 pe-4 pt-15 pb-15 bg-white">
                <h6 className="fw-500 text-22">Key Specifications</h6>
                <Specifications />
              </div>
            </div>
            <div className="col-lg-4 ms-10 d-flex  justify-content-end sm:mt-20 lg:mt-4 ">
              <PopularModals vehicleDetails={vehicleData?.data} />
            </div>
          </div>

        </div>
        {/* </div> */}
      </section>

      <section className="pt-40 mb-40 container">
        <div className="view_bordershadow bg-white">
          <div className="container pt-20 pb-20 lg:px-30 sm:px-0">
            <div className="ms-3">
              <h4 className="mb-10">Specifications</h4>
            </div>
            <div className="w-100">
              <SpecificationTable
                vehicleSpecs={vehicleData?.data?.vehicle_specs}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 pt-40">
        <div className="container">
          {/* <h3 className="text-22 fw-500 mb-20">Car Location</h3> */}
          <div className=" rounded-4 overflow-hidden map-500">
            <VideoBanner videos={vehicleData?.data?.video_links}/>
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
                <br /> {vehicleData?.data?.title}
              </h2>
            </div>

            <div className="col-lg-8">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq 
                faq={vehicleData?.data?.faq}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40 mb-40">
        <div className="container ">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-22 fw-500">Similar Trucks</h2>
            </div>

            <div className="col-lg-8">
              <SimilarTrucks similarVehicles={similarVehicle}/>
            </div>
          </div>
        </div>
      </section>

      <CallToActions />

      <Footer className="text-dark"/>
    </>
  );
};

export default dynamic(() => Promise.resolve(SinglePage), {
  ssr: false,
});
