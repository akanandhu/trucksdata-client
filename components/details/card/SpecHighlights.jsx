const SpecHighlights = () => {
  const propertyContent = [
    {
      id: 1,
      icon: "icon-user-2",
      name: "Power",
      content: "180 HP",
    },
    {
      id: 2,
      icon: "icon-luggage",
      name: "GVW",
      content: "41500 KG",
    },
    {
      id: 3,
      icon: "icon-transmission",
      name: "Engine",
      content: "H-Series 6 cylinder",
    },
    {
      id: 4,
      icon: "icon-speedometer",
      name: "Fuel Tank",
      content: "160 Ltr",
    },
    {
      id: 5,
      icon: "icon-speedometer",
      name: "No. of Tyres",
      content: "6+1",
    },
    {
      id: 6,
      icon: "icon-speedometer",
      name: "Wheelbase",
      content: "205mm",
    },
  ];
  return (
    <div>
      <div className="row y-gap-30 justify-between pt-30">
        {propertyContent.map((item) => (
          <div className="col-md-auto col-6" key={item.id}>
            <div className="d-block text-center">
              <i className={`${item.icon} text-22 text-dark-1 mr-10`} />
              <div className="text-15 lh-15">
                {item.name}
                <br /> {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecHighlights;
