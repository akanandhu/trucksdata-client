function generateNumberArray(n) {
  return Array.from({ length: n }, (_, index) => index + 1);
}

const SpecTable = ({ hasVariant, tableData, vehicleSpecs, specId }) => {
  const specification = vehicleSpecs?.filter(
    (item) => item?.specification?.specification_category_id === specId
  );

  const counts = {
    option_one: 0,
    option_two: 0,
    option_three: 0,
    option_four: 0,
  };

  tableData?.forEach((entry) => {
    Object.keys(counts).forEach((option) => {
      if (entry[option] !== "-") {
        counts[option]++;
      }
    });
  });

  const maxCount = Math.max(...Object.values(counts));
  const resultArray = generateNumberArray(maxCount);
  console.log(resultArray, hasVariant, "resulttttt");

  return (
    <div className="overflow-scroll scroll-bar-1">
      <table className="table-3 -border-bottom col-12">
        {hasVariant && (
          <thead className="bg-light-2">
            <tr>
              <th></th>
              {resultArray?.map((item, i) => {
                return <th key={i}>Option {i + 1}</th>;
              })}
            </tr>
          </thead>
        )}

        <tbody>
          {tableData?.map((row, index) => {
            const optionsRow = hasVariant
              ? [row?.option_one, row?.option_two, row?.option_three, row?.option_four]
                  ?.filter(Boolean)
                  .filter((item) => item !== undefined && item !== "-")
              : [row?.option_one]?.filter(Boolean);

            console.log(optionsRow, hasVariant, "rowchecking");
            return (
              <tr key={index}>
                <td>{row.item}</td>
                {optionsRow.map((item) => (
                  <td key={item}>{item ?? "-"}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
