import Seo from "../../components/common/Seo";
import MainFilterSearchBox from "../../components/hero/hero-8/MainFilterSearchBox";
import RentalProperties from "../../components/rental-list/rental-list-v1/RentalProperties";
import Pagination from "../../components/rental-list/common/Pagination";
import CallToActions from "../../components/common/CallToActions";
import Header8 from "../../components/header/header-8/index";
import DefaultFooter from "../../components/footer/default";
import Sidebar from "../../components/search-results/sidebar/Sidebar";
import TopHeaderFilter from "../../components/search-results/header/TopHeaderFilter";
import SearchResults from "../../components/search-results/results/SearchResults";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import CompareBar from "../../components/compare-bar/CompareBar";
import { useDispatch } from "react-redux";
import { clearAllCompare } from "../../features/compare/compareSlice";
import SearchResultsMobile from "../../components/search-results/results/SearchResultsMobile";

const toastStyles = {
  icon: "🚚",
  position: "top-right",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

const SearchResultsPage = () => {
  const [show, setShow] = useState(false);
  function handleCompareExceed() {
    toast.error("Maximum of three vehicles selected", {
      ...toastStyles,
    });
  }

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAllCompare());
    };
  }, [dispatch]);

  return (
    <>
      <Seo pageTitle="Search Results" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header8 />
      {/* End Header 1 */}

      <section className="pb-40 pt-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="fw-600 search-font-custom  ">
                  Filter out the Truck of your need!
                </h1>
              </div>
              {/* End text-center */}
              <div className="pt-3 ">
                <MainFilterSearchBox />
              </div>
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg ">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none ">
                <Sidebar />
              </aside>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title " id="offcanvasLabel">
                    Filter out the Truck of your need!
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body ">
                  <aside className="sidebar y-gap-40   xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                <div class="offcanvas-footer mt-3 p-2 border-light  d-flex justify-content-end gap-3 sticky-bottom    sticky-bottom   ">
                  <button
                    type="button"
                    className="btn btn-primary w-25 "
                    data-bs-dismiss="offcanvas"
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-25"
                    data-bs-dismiss="offcanvas"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <CompareBar />

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30 xl:d-none   ">
                <SearchResults
                  showError={handleCompareExceed}
                  setShow={setShow}
                />
              </div>
              <div className="row y-gap-2  d-flex justify-content-center hideMobile ">
                <SearchResultsMobile
                  setShow={setShow}
                  showError={handleCompareExceed}
                />
              </div>
              {/* End .row */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default SearchResultsPage;
