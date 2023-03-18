import React from 'react'
import "./Gallary.css"
function GallaryItem({ ele }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 position-relative gallary-img mb-3">
            <div>
                <img src={ele.img} className='w-100' alt="" />
            </div>
            <div className="overlays d-flex justify-content-center align-items-center flex-column">
                <div className='btn btn-red text-e fw-bold add mb-2'>ADD</div>
                <p className='add text-f fw-bold' style={{ letterSpacing: '0.1rem' }}>{ele.titel}</p>
            </div>
        </div>
    )
}

export default GallaryItem