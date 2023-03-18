import React from 'react'
import './Services.css'
function Services() {
    return (
        <section className='position-relative services' id='Service'>
            <div className='overlay'></div>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-3 col-md-6 z-index-5 d-flex services-item flex-column align-items-center'>
                        <div className='img mt-2 d-flex align-items-center justify-content-center px-15'>
                            <img src="https://cefrax.websitelayout.net/img/icon-foods.png" alt="" />
                        </div>
                        <div className='px-15 text-center'>
                            <h4 className='text-f fw-bold'>DELICIOUS FOODS</h4>
                            <p className='text-f'>We provide best and fresh quality foods. We also gives you required signature dishes.</p>
                        </div>
                        <p className='w-25 btn-red' style={{ height: '4px' }}></p>
                    </div>
                    <div className='col-lg-3 col-md-6 z-index-5 d-flex services-item flex-column align-items-center'>
                        <div className='img mt-2 d-flex align-items-center justify-content-center px-15'>
                            <img src="https://cefrax.websitelayout.net/img/icon-events.png" alt="" />
                        </div>
                        <div className='px-15 text-center'>
                            <h4 className='text-f fw-bold'>PRIVATE EVENTS</h4>
                            <p className='text-f'>We provide best and fresh quality foods. We also gives you required signature dishes.</p>
                        </div>
                        <p className='w-25 btn-red' style={{ height: '4px' }}></p>
                    </div>
                    <div className='col-lg-3 col-md-6 z-index-5 d-flex services-item flex-column align-items-center'>
                        <div className='img mt-2 d-flex align-items-center justify-content-center px-15'>
                            <img src="https://cefrax.websitelayout.net/img/icon-order.png" alt="" />
                        </div>
                        <div className='px-15 text-center'>
                            <h4 className='text-f fw-bold'>ONLINE ORDER</h4>
                            <p className='text-f'>We provide best and fresh quality foods. We also gives you required signature dishes.</p>
                        </div>
                        <p className='w-25 btn-red' style={{ height: '4px' }}></p>
                    </div>
                    <div className='col-lg-3 col-md-6 z-index-5 d-flex services-item flex-column align-items-center'>
                        <div className='img mt-2 d-flex align-items-center justify-content-center px-15'>
                            <img src="https://cefrax.websitelayout.net/img/icon-delivery.png" alt="" />
                        </div>
                        <div className='px-15 text-center'>
                            <h4 className='text-f fw-bold'>FREE DELIVERY</h4>
                            <p className='text-f'>We provide best and fresh quality foods. We also gives you required signature dishes.</p>
                        </div>
                        <p className='w-25 btn-red' style={{ height: '4px' }}></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services