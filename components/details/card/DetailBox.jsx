const DetailBlock = ({ data }) => {
  return (
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{data.heading}</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <label>{data?.value}</label>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    heading: "Manufacturer",
    value: "Bharat Benz",
  },
  {
    heading: "Power Source",
    value: "Diesel",
  },
  {
    heading: "Category of Vehicle",
    value: "N2",
  },
  {
    heading: "Axle Configuartion",
    value: "4X2",
  },
  //   {
  //     heading: 'Chassis Options',
  //     value: 'Cab & Chassis (CBC)'
  //   },
];

const DetailBox = () => {
  return (
    <>
      {data.map((obj) => {
        return (
          <div key={obj.heading} className="col-12">
            <DetailBlock data={obj} />
          </div>
        );
      })}

      <div className="col-12">
        <button className="d-flex button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1">
          {/* <i className="icon-search text-20 mr-10" /> */}
          <div className="w-25">
            <img src="/icons/download.png" alt="download" width="19px" />
          </div>
          <div>Download Brochure</div>
        </button>

        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default DetailBox;
