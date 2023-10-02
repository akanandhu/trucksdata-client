const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One-Faq",
      title: "What is Trucks Data for?",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
      id: 2,
      collapseTarget: "Two-Faq",
      title: "What is TrucksData for?",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
      id: 3,
      collapseTarget: "Three-Faq",
      title: "What is TrucksData for?",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
      id: 4,
      collapseTarget: "Four-Faq",
      title: "What is TrucksData for?",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
    {
      id: 5,
      collapseTarget: "Five-Faq",
      title: "What is TrucksData for?",
      content: `Trucks Data is for filtering the perfect truck for your need. We also deals with variety of vehicles.`,
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
