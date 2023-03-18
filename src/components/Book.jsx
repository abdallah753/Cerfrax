import React from 'react'
import "./Book.css"
function Book() {
  return (
    <section className='book' id='Book'>
      <div className="container">
        <div className="row">
          <div className='col-md-5'>
            <h4 className='text-red'>__ Reservation</h4>
            <h3 className='fw-bold text-e mb-4'>BOOK A TABLE</h3>
            <form>
              <input type="text" className='w-100 mb-4' placeholder='YOUR NAME: ' />
              <input type="email" className='w-100 mb-4' placeholder='EMAIL:' />
              <input type="tel" className='w-50 mb-4' placeholder='TELEPHON:' />
              <input type="text" className='w-50 mb-4' placeholder='PERSONS:' />
              <input type="text" className='w-50 mb-4' placeholder='DATA:' />
              <input type="text" className='w-50 mb-4' placeholder='TIME:' />
              <input type="text" className='w-100 mb-4' placeholder='MASSAGE:' />
            </form>
            <button className='btn btn-red'>BOOK NOW</button>
          </div>
          <div className='col-md-7 book-img'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Book