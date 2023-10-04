const SpecTable = ({hasVariant, tableData}) => {

    return (
    <div className="overflow-scroll scroll-bar-1">
      <table className="table table-responsive" >
        {hasVariant && 
        <thead>
          <tr >
            <th></th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
          </tr>
        </thead>}
        <tbody >
          {tableData?.map((row, index) => (
            <tr key={index} >
              <td className="fw-500 view_tablefontsize">{row.item}</td>
              <td className="fw-300 view_tablefontsize">{row.option_one}</td>
              {hasVariant && <td className="fw-400 view_tablefontsize">{row.option_two}</td>}
              {hasVariant &&<td className="fw-400 view_tablefontsize">{row.option_three}</td>}
              {hasVariant &&<td className="fw-400 view_tablefontsize">{row.option_four}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
