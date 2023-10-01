const SpecTable = ({hasVariant}) => {
  const data = [
    {
      item: "Loading Span (ft) / Loading Capacity (Cu.M)",
      description: "Discover America",
      option_one: "15",
      option_two: "17",
      option_three: "20.1",
      option_four: "20.9",
      paid: "$0",
      status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Wheel Base (mm)",
      description: "Discover America",
      option_one: "3360",
      option_two: "3760",
      option_three: "4250",
      option_four: "4800",
      paid: "$0",
      status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Cabin Type",
      description: "Discover America",
      option_one: "Day cabin",
      option_two: "Day cabin",
      option_three: "Day cabin",
      option_four: "Day cabin",
      paid: "$0",
      status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
      item: "Gross Vehicle Weight (Kg)",
      description: "Discover America",
      option_one: "11125",
      option_two: "11125",
      option_three: "11125",
      option_four: "11125",
      paid: "$0",
      status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
      createdAt: "04/04/2022 08:16",
    },
    {
        item: "Kerb Weight (Range) (Kg)",
        description: "Discover America",
        option_one: "3475",
        option_two: "3555",
        option_three: "3600",
        option_four: "3680",
        paid: "$0",
        status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
        createdAt: "04/04/2022 08:16",
      },
      {
        item: "Payload  (Kg)",
        description: "Discover America",
        option_one: "7650",
        option_two: "7570",
        option_three: "7525",
        option_four: "7445",
        paid: "$0",
        status: { color: "yellow-4", text: "yellow-3", label: "Pending" },
        createdAt: "04/04/2022 08:16",
      },
  ];
  return (
    <div className="overflow-scroll scroll-bar-1 pt-30">
      <table className="table-2 col-12">
        {hasVariant && <thead>
          <tr>
            <th></th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
          </tr>
        </thead>}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="fw-700  ">{row.item}</td>
              <td className="fw-400 ">{row.option_one}</td>
              {hasVariant && <td className="fw-400">{row.option_two}</td>}
              {hasVariant &&<td className="fw-400">{row.option_three}</td>}
              {hasVariant &&<td className="fw-400">{row.option_four}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
