"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = (props) => {
  const { vehicleData } = props;
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">TrucksData</Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href="/"
                  className={router.pathname === "/" ? "menu-active-link" : ""}
                />
              }
            >
              Home
            </MenuItem>
            {/* End  All Home Menu */}

            {/* {menuLists?.map((obj) => {
              return (
                <SubMenu key={obj?.id} label={obj.title}>
                  {obj?.categorieMobileItems?.map((item) => (
                    <SubMenu label={item.title} key={item.id}>
                      {item.menuItems.map((single) => (
                        <SubMenu label={single.title} key={single.id}>
                          {single.menuList.map((menu, i) => (
                            <MenuItem
                              key={i}
                              component={
                                <Link
                                  href={menu.routePath}
                                  className={
                                    isActiveLink(menu.routePath, router.asPath)
                                      ? "menu-active-link"
                                      : ""
                                  }
                                />
                              }
                            >
                              {menu.name}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              );
            })} */}

            {/* vehicle type menu */}
            {vehicleData?.map((vehicle) =>
              vehicle["status"] === "active" ? (
                <SubMenu label={vehicle["name"]} key={vehicle["id"]}>
                  {vehicle["manufacturers"].map((manufacturer) => (
                    <SubMenu
                      label={manufacturer["name"]}
                      key={manufacturer["id"]}
                    >
                      {manufacturer["series"].map((series, i) => (
                        <SubMenu label={series.title} key={series.title + i}>
                          {series?.vehicles?.map((model, i) => (
                            <MenuItem key={model.title + i}>
                              {model.title}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ) : null
            )}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
