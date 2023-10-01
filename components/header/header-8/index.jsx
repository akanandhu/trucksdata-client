import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineCompare } from "react-icons/md";
import MainMenu from "../MainMenu";
import SearchBoxContent from "../../hero/hero-8/SearchBoxContent";
import MobileMenu from "../MobileMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      {" "}
      <header className={`header  ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50">
                  <h3>TrucksData</h3>
                  {/* <img src="/img/general/logo-dark-2.svg" alt="logo icon" /> */}
                  {/* <img src="/img/general/logo-dark-2.svg" alt="logo icon" /> */}
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="mr-15 xxl:d-none d-flex">
                  <button
                    className="text-26 text-dark-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    <div className="icon-search"></div>
                  </button>
                </div>
                {/* End Search Icon */}

                <div
                  className="offcanvas offcanvas-top vh-100"
                  tabIndex={-1}
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div className="offcanvas-header position-absolute top-0 end-0">
                    <button
                      type="button"
                      className="btn-close text-reset "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  {/* End header */}
                  <SearchBoxContent />
                </div>

                <div className="mr-15 xxl:d-none">
                  {/* <Link href={"/"}> */}
                  <button className="text-26 text-dark-1 d-flex">
                    <MdOutlineCompare />
                  </button>
                  {/* </Link> */}
                </div>

                <LanguageMegaMenu textClass="text-black" />


               
                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30">
                  <div>
                    <Link
                      href="/others-pages/login"
                      className="d-flex items-center text-inherit text-22"
                    >
                      <MdOutlineCompare />
                    </Link>
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
