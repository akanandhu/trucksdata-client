'use client'
import Seo from "../../components/common/Seo";
import CompareBox from "../../components/compare/CompareBox";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import DefaultFooter from "../../components/footer/default/index";
import CallToActions from "../../components/common/CallToActions";
import MainHeader from "../../components/header/main-header";

const ComparePage = () => {
  return (
    <div className="position-relative   ">
      <Seo pageTitle={"Compare"} />
      <div className="header-margin"></div>
      <MainHeader />
      <CompareLocationTop />
      <DescriptionBox />
      <CompareBox />
      <CallToActions />
      <DefaultFooter />
    </div>
  );
};
export default ComparePage;
