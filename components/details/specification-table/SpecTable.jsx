const SpecTable = ({ hasVariant, tableData, vehicleSpecs,specId }) => {
  const specification = vehicleSpecs?.filter((item)=> item?.specification?.specification_category_id === specId)
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
          {specification?.map((spec, i) => (
            <tr key={i}>
              <td>{spec.specification.name}</td>
              {spec.values.map((item) => (
                <td key={item.id}>{item.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
