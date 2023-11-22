const ContactInfo = () => {
  const isClient = typeof window !== "undefined";
  const generalData = isClient ? localStorage.getItem("general-data") : null;
  const general = isClient ? JSON.parse(generalData) : {};
  const { email, contact_number } = general || {};

  const contactContent = [
    {
      id: 1,
      title: "Feel free to connect.",
      action: `tel:${contact_number}`,
      text: `${contact_number}`,
    },
    {
      id: 2,
      title: "Need live support?",
      action: `mailto:${email}`,
      text: `${email}`,
    },
  ];

  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
