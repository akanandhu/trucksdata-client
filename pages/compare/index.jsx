"use client";
import Seo from "../../components/common/Seo";
import CompareBox from "../../components/compare/CompareBox";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import DefaultFooter from "../../components/footer/default/index";
import CallToActions from "../../components/common/CallToActions";
import MainHeader from "../../components/header/main-header";
import { useEffect, useState } from "react";

const ComparePage = () => {
  // const determineDefaultValues = () => {
  //   const isClient = typeof window !== "undefined"
  //   const screenWidth = isClient ? window.innerWidth : null;
  //   return screenWidth < 576 ? defaultValues.slice(0, 2) : defaultValues;
  // };

  const defaultValues = [
    {
      index: 1,
    },
    {
      index: 2,
    },
    {
      index: 3,
    },
  ];

  const [vehicle, setVehicle] = useState(defaultValues);
  
  // useEffect(() => {
  //   const handleResize = () => {
  //     setVehicle(determineDefaultValues());
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [determineDefaultValues]);

  return (
    <div className="position-relative   ">
      <Seo pageTitle={"Compare"} />
      <div className="header-margin"></div>
      <MainHeader />
      <CompareLocationTop />
      <DescriptionBox />
      <CompareBox vehicle={vehicle} setVehicle={setVehicle} />
      <CallToActions />
      <DefaultFooter />
    </div>
  );
};
export default ComparePage;
