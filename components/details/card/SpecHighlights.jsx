import Image from "next/image";

const SpecHighlights = ({vehicleDetails}) => {
  const keyspecs = vehicleDetails?.vehicle_specs?.filter((item)=> item.is_key_feature);
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

  const showIconUrl = (title)=>{
    const item = propertyContent.find((item)=> item.name === title);
    const url = item?.icon;
    return url ? url : '/icons/truck-wheel.svg'
  }
  return (
    <div>
      <div className="row y-gap-30 justify-between pt-30">
        {keyspecs?.slice(0,6)?.map((item) => (
          <div className="col-md-auto col-6" key={item.id}>
            <div className="d-block text-center">
              <Image src={showIconUrl(item?.specification?.name)} width={22} height={22}  alt={'icon'} />
              <div className="text-15 lh-15">
               <span className=" fw-semibold ">{item?.specification?.name}</span> 
                <br /> {item?.values[0]?.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecHighlights;
