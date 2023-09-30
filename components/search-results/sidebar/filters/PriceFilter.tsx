import React from 'react'
import PriceSlider from './PriceSlider'

const PriceFilter = () => {
  return (
    <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PriceSlider />
          </div>
        </div>
      </div>
  )
}

export default PriceFilter
