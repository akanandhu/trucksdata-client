import React from 'react'
import ButtonFilter from '../../../Filter/SearchFilter/FilterButtons';

function Status({sideParams, setSideParams}) {
    const statusData = [
        {
          label: "active",
          count: 20,
        },
        {
          label: "inactive",
          count: 20,
        }
      ];
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Status</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter setSideParams={setSideParams} sideParams={sideParams} filters={statusData} label={"Status"} />
      </div>
    </div>
  )
}

export default Status