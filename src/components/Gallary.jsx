import React, { Fragment } from 'react'
import "./Gallary.css"
import GallaryItem from './GallaryItem'
import data from './Gallary.json'
function Gallary() {

  return (
    <>
      <section className='gallary' id='Gallary'>
        <h4 className='text-center text-red'>__ Discover our popular dishes</h4>
        <h3 className='fw-bold text-center mb-5'>FOOD GALLERY</h3>
        <div className="container">
          <div className='row '>
            {data.map((ele) => {
              return <Fragment key={Math.random() * 9.5}><GallaryItem ele={ele} /></Fragment>
            })}
          </div>
        </div>
      </section>
      <section className='after-gallary position-relative'>
        <div className="overlay"></div>
        <h4 className='text-red text-center position-relative mb-4'>__ Testimonials</h4>
        <h3 className='text-center text-e position-relative mb-4'>WHAT OUR CUSTOMERS SAY</h3>
        <div className=' position-relative'>
          <p className='text-center'>@</p>
          <p className='text-center w-75 mx-auto text-f mb-4'>Laudantium, oloremquetotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem.</p>
          <div className='after-gallary-img mx-auto position-relative mb-3'>
            <img src="https://cefrax.websitelayout.net/img/testmonials/t-2.jpg" className='w-100' alt="" />
          </div>
          <p className='text-center text-f fs-6'>Keir Prestonly</p>
        </div>
      </section>
    </>
  )
}

export default Gallary