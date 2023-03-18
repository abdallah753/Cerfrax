import React from 'react'
import './Blog.css'
function Blog() {
  return (
    <>
      <section className='blog' id='Blog'>
        <h3 className='text-red text-center'>__ Latest news</h3>
        <h4 className='mb-5 text-center fw-bold'>OUR BLOG</h4>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-4 mb-4 col-md-6 col-sm-10'>
              <div className='card p-0'>
                <div className='overflow-hidden'>
                  <img src="https://cefrax.websitelayout.net/img/blog/3.jpg" className='w-100' alt="" />
                </div>
                <div className="card-body">
                  <h5 className='mb-4'>Best foods for you</h5>
                  <p className='mb-3'>by Abdallah Ramadan  |  16 Mars 2023</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-4 col-md-6 col-sm-10'>
              <div className='card p-0'>
                <div className='overflow-hidden'>
                  <img src="https://cefrax.websitelayout.net/img/blog/3.jpg" className='w-100' alt="" />
                </div>
                <div className="card-body">
                  <h5 className='mb-4'>Best foods for you</h5>
                  <p className='mb-3'>by Abdallah Ramadan  |  16 Mars 2023</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-4 col-md-6 col-sm-10'>
              <div className='card p-0 '>
                <div className='overflow-hidden'>
                  <img src="https://cefrax.websitelayout.net/img/blog/3.jpg" className='w-100' alt="" />
                </div>
                <div className="card-body">
                  <h5 className='mb-4'>Working in the kitchen</h5>
                  <p className='mb-3'>by Abdallah Ramadan  |  16 Mars 2023</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='after-blog position-relative'>
        <div className="container  justify-content-center d-flex flex-column position-relative z-index-5">
          <h3 className='text-f fw-bold text-center'>We also provide catering services</h3>
          <p className='lead text-e text-center'>We provide best and fresh quality foods. We also gives you required signature dishes.</p>
          <a href='#Book' className='btn btn-red text-e fw-bold mx-auto'>Book Service</a>
        </div>
        <div className="overlay"></div>
      </section>
    </>
  )
}

export default Blog