import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineCompare } from "react-icons/md";
import MainMenu from "../MainMenu";
import SearchBoxContent from "../../hero/hero-8/SearchBoxContent";
import MobileMenu from "../MobileMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import { useRouter } from "next/router";

const Header1 = () => {
  const router = useRouter();
  const isHome = router.asPath === "/";
  const [navbar, setNavbar] = useState(!isHome);

  const changeBackground = () => {
    if (window.scrollY >= 10 || !isHome) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  function handleCompareRoute() {
    router.push("/compare");
  }

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
                  {/* <button
                    onClick={handleCompareRoute}
                    className="text-26 text-dark-1 d-flex"
                  >
                    <span className="text-16 fw-500">Compare</span>
                    <MdOutlineCompare />
                  </button> */}
                  <ul className={`menu__nav -is-active`}>
                    <li
                      className={
                        router.pathname === "/compare" ? "current" : ""
                      }
                    >
                      <div className="d-flex gap-1 text-center align-items-center  ">
                        <div>
                          <Link className="fw-500" href="/compare">Compare</Link>
                        </div>
                        <div className="text-22">
                          <MdOutlineCompare />
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* </Link> */}
                </div>

                <div className="xxl:d-none">
                  <LanguageMegaMenu textClass="text-black" />
                </div>

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30">
                  <div
                    className="d-flex items-center text-inherit text-22 menu__nav -is-active"
                    onClick={handleCompareRoute}
                  >
                    <MdOutlineCompare />
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
