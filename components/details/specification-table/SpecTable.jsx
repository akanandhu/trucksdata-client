const SpecTable = ({hasVariant, tableData}) => {

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
          {tableData?.map((row, index) => (
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
