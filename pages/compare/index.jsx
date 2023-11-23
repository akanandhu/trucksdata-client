"use client";
import Seo from "../../components/common/Seo";
import CompareBox from "../../components/compare/CompareBox";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import DefaultFooter from "../../components/footer/default/index";
import CallToActions from "../../components/common/CallToActions";
import MainHeader from "../../components/header/main-header";
import { useState } from "react";

const ComparePage = () => {


  const [vehicle, setVehicle] = useState([
    {
      index: 1,
    },
    {
      index: 2,
    },
    {
      index: 3,
    },
  ]);

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
