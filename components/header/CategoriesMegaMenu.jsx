import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useState } from "react";

const CategoriesMegaMenu = ({
  itemList,
  categorieMegaMenuItems,
  vehicleModels,
}) => {
  const router = useRouter();
  const [models, setModels] = useState([]);
  const handleTabSelection = (index) => {
    console.log("Tab selection ", index);
    console.log("VehicleModes ", vehicleModels);
    console.log("list ", itemList[index].brand);
    const reducedModels = vehicleModels.reduce((acc, current) => {
      if (current.id === index && current.brand === itemList[index].brand) {
        acc = current;
      }
      return acc;
    });
    setModels(reducedModels.series);
    console.log("Reduced models ", reducedModels);
  };
  return (
    <Tabs
      className="tabs -underline-2 js-tabs"
      onSelect={(index) => handleTabSelection(index)}
      defaultIndex={0}
    >
      {console.log("Vehicle models ", models)}
      <TabList
        className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-5 js-tabs-controls"
        id="custom_scroll"
      >
        {itemList.map((item, i) => (
          <Tab className="col-auto" key={i}>
            <button className="tabs__button text-light-1 fw-500 js-tabs-button">
              {item.brand}
            </button>
          </Tab>
        ))}
      </TabList>
      {/* End tab-controls */}

      <div className="tabs__content js-tabs-content mt-20">
        {/* {categorieMegaMenuItems.map((megaMenu) => (
          <TabPanel key={megaMenu.id}>
            {console.log('megha menu ',megaMenu)}
            {megaMenu?.menuCol?.map((megaCol, i) => (
              <ul className="mega__content" key={i}>
                <li className="mega__grid">
                  {megaCol?.menuItems?.map((item) => (
                    <div className="mega__item" key={item.id}>
                      <div className="text-15 fw-500">{item.title}</div>
                      <div className="y-gap-5 text-15 pt-5">
                        {item?.menuList?.map((list, i) => (
                          <div
                            key={i}
                            className={
                              isActiveLink(list.routePath, router.asPath)
                                ? "current"
                                : ""
                            }
                          >
                            <Link href={list.routePath}>{list.name}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </li>

                <li className="mega__image d-flex relative">
                  <Image
                    width={270}
                    height={300}
                    src={megaCol?.megaBanner}
                    alt="image"
                    className="rounded-4 js-lazy"
                  />

                  <div className="absolute w-full h-full px-30 py-24">
                    <div className="text-22 fw-500 lh-15 text-white">
                      {megaCol?.title}
                    </div>
                    <Link
                      href={megaCol?.btnRoute}
                      className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                    >
                      {megaCol?.btnText}
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </TabPanel>
        ))} */}
        {itemList.map((item, i) => {
          return (
            <TabPanel key={i}>
              <ul className="mega__content" key={i}>
                <li className="mega__grid">
                {models.map((model) => {
                  return (
                      // {megaCol?.menuItems?.map((item) => (
                        <div className="mega__item" key={model.id}>
                          <div className="text-15 fw-500">{model.title}</div>
                          <div className="y-gap-5 text-15 pt-5">
                            {model?.vehicles?.map((list, i) => (
                              <div
                                key={i}
                                // className={
                                //   isActiveLink(list.routePath, router.asPath)
                                //     ? "current"
                                //     : ""
                                // }
                              >
                                <Link 
                                // href={list.routePath}
                                href={'/'}
                                >{list.title}</Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      // ))}

                    
                  );
                })}
                </li>
                {/* // <li className="mega__image d-flex relative">
                    //   <Image
                    //     width={270}
                    //     height={300}
                    //     src={megaCol?.megaBanner}
                    //     alt="image"
                    //     className="rounded-4 js-lazy"
                    //   />

                    //   <div className="absolute w-full h-full px-30 py-24">
                    //     <div className="text-22 fw-500 lh-15 text-white">
                    //       {megaCol?.title}
                    //     </div>
                    //     <Link
                    //       href={megaCol?.btnRoute}
                    //       className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                    //     >
                    //       {megaCol?.btnText}
                    //     </Link>
                    //   </div>
                    // </li> */}
              </ul>
            </TabPanel>
          );
        })}
      </div>
    </Tabs>
  );
};

export default CategoriesMegaMenu;
