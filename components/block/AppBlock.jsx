const AppBlock = () => {
  return (
    <>
      <h2 className="text-30 lh-15">Find your trucks</h2>
      <p className="text-dark-1 pr-40 lg:pr-0 mt-15 sm:mt-5">
       Filter the truck you want
      </p>

      <div className="row items-center pt-30 sm:pt-10">
        <div className="col-auto">
          <div className="d-flex items-center px-20 py-10 rounded-8 border-white-15 text-white bg-dark-3">
            <div className="icon-apple text-24" />
            <div className="ml-20">
              <div className="text-15 lh-1 fw-500">Use the Filter</div>
            </div>
          </div>
        </div>
        {/* End .col */}

      </div>
      {/* End .row */}
    </>
  );
};

export default AppBlock;
