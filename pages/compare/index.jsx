import LocationTopBar from "../../components/common/LocationTopBar";
import Seo from "../../components/common/Seo";
import CompareBox from "../../components/compare/CompareBox";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import Header1 from "../../components/header/header-8";

const ComparePage = () => {
    return (
        <div className="position-relative   ">
            <Seo  pageTitle={'Compare'} />
            <div className="header-margin"></div>
            <Header1 />
            <CompareLocationTop />
            <DescriptionBox />
            <CompareBox />
             
        </div>
    )
}
export default ComparePage;