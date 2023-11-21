import Wrapper from "./layout/wrapper";
import Home from "./home/home";
import useGetGeneralData from "../services/general/useGetGeneralData";

const MainRoot = () => {

  const {data } = useGetGeneralData()
  const general = data?.data?.data?.[0]

  return (
    <Wrapper>
      <Home general={general} />
    </Wrapper>
  );
};

export default MainRoot;
