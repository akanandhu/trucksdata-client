import React from "react";

const CompareDataTable = ({ hasVariant, tableData }) => {
  return (
    <div className="overflow-scroll scroll-bar-1 text-custom-responsive">
      <table className="table table-responsive">
        {hasVariant && (
          <thead>
            <tr>
              <th></th>
              {hasVariant && <th>Vehicle 1</th>}
              {hasVariant && <th>Vehicle 2</th>}
              {hasVariant && <th>Vehicle 3</th>}
            </tr>
          </thead>
        )}
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index}>
              <td className="fw-500 view_tablefontsize w-25 ">{row.item}</td>
              <td className="fw-300 view_tablefontsize ">{row.option_one}</td>
              {row?.option_two && (
                <td className="fw-400 view_tablefontsize ">{row.option_two}</td>
              )}
              {row?.option_three && (
                <td className="fw-400 view_tablefontsize ">
                  {row.option_three}
                </td>
              )}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareDataTable;
