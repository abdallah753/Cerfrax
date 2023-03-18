import React from 'react'
import './Menu.css'
function MenuItem({ ele }) {
    return (
        <div className='col-md-9 col-lg-6 col-11 mb-4'>
            <div className='card position-relative'>
                <div className="card-body p-15 pe-5">
                    <h6 className='fw-bold' style={{ color: '#6b6b6b' }}>{ele.titel}</h6>
                    <p className='mb-4' style={{ color: '#6b6b6b' }}>Cafe ut restaurants unde omnis iste natus error sit voluptatem totam rem aperiam, eaque illo inventore veritatis.</p>
                    <p style={{ color: '#6b6b6b' }}><span className='text-red'>INGREDIENTS </span> : {ele.ingredients}</p>
                </div>
                <p className='position-absolute bg-red text-f p-1 px-3' style={{ top: '0', right: '0', border: '2px solid #fff', outline: '3px solid #eb3007' }}>${ele.price}</p>
            </div>
        </div>

    )
}

export default MenuItem