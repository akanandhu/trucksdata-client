import LocationTopBar from "../../components/common/LocationTopBar";
import Seo from "../../components/common/Seo";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import Header1 from "../../components/header/header-8";

const ComparePage = () => {
    return (
        <div>
            <Seo  pageTitle={'Compare'} />
            <div className="header-margin"></div>
            <Header1 />
            <CompareLocationTop />
            <DescriptionBox />
             
        </div>
    )
}
export default ComparePage;