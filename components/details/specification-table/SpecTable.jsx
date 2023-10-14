const SpecTable = ({ hasVariant, tableData }) => {
  return (
    <div className="overflow-scroll scroll-bar-1">
      <table className="table-3 -border-bottom col-12">
        {hasVariant && (
          <thead className="bg-light-2">
            <tr>
              <th></th>
              {<th>Option 1</th>}
              {<th>Option 2</th>}
              {<th>Option 3</th>}
              {<th>Option 4</th>}
            </tr>
          </thead>
        )}
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index}>
              <td >
                {row?.item}
              </td>
              <td >{row.option_one}</td>
              {row?.option_two && (
                <td >{row.option_two}</td>
              )}
              {row?.option_three && (
                <td >
                  {row.option_three}
                </td>
              )}
              {row?.option_four && (
                <td >
                  {row.option_four}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
