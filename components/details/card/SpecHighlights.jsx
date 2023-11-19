import Image from "next/image";

const SpecHighlights = ({vehicleDetails}) => {
  const propertyContent = [
    {
      id: 1,
      icon: "/icons/power.svg",
      name: "Power",
      content: "180 HP",
    },
    {
      id: 2,
      icon: "/icons/weight.svg",
      name: "GVW",
      content: "41500 KG",
    },
    {
      id: 3,
      icon: "/icons/engine.svg",
      name: "Engine",
      content: "H-Series 6 cylinder",
    },
    {
      id: 4,
      icon: "/icons/fuel-tank.svg",
      name: "Fuel Tank",
      content: "160 Ltr",
    },
    {
      id: 5,
      icon: "/icons/tyre.svg",
      name: "No. of Tyres",
      content: "6+1",
    },
    {
      id: 6,
      icon: "/icons/truck-wheel.svg",
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
              <Image src={item.icon} width={22} height={22}  alt={'icon'} />
              <div className="text-15 lh-15">
               <span className=" fw-semibold ">{item.name}</span> 
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
