import React from 'react'
import './Chef.css'
function Chef() {
    return (
        <section className='chef' id='Our chef'>
            <div className="container">
                <h4 className='text-red text-center'>__ Our expert</h4>
                <h3 className='fw-bold text-center mb-5'>MEET OUR CHEF</h3>
            </div>
            <div id='chef' className="slide carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#chef" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#chef" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#chef" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="container">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='row justify-content-center'>
                                <div className='col-lg-6 col-md-10 kkk p-3 bg-light' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <h5 className='fw-bold'>Frances Karel</h5>
                                    <p className='text-reg'>EXECUTIVE CHEF</p>
                                    <p className='bg-red w-25' style={{ height: '3px' }}></p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <div>
                                        <img src="https://cefrax.websitelayout.net/img/chef_sign.png" alt="img" />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-10 p-0' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <img src="https://cefrax.websitelayout.net/img/team/chef-01.jpg" className='w-100' alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row justify-content-center'>
                                <div className='col-lg-6 col-md-10 kkk p-3 bg-light' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <h5 className='fw-bold'>Frances Karel</h5>
                                    <p className='text-reg'>EXECUTIVE CHEF</p>
                                    <p className='bg-red w-25' style={{ height: '3px' }}></p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <div>
                                        <img src="https://cefrax.websitelayout.net/img/chef_sign.png" alt="img" />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-10 p-0' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <img src="https://cefrax.websitelayout.net/img/team/chef-01.jpg" className='w-100' alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row justify-content-center'>
                                <div className='col-lg-6 col-md-10 kkk p-3 bg-light' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <h5 className='fw-bold'>Frances Karel</h5>
                                    <p className='text-reg'>EXECUTIVE CHEF</p>
                                    <p className='bg-red w-25' style={{ height: '3px' }}></p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <p className='mb-4' style={{ wordSpacing: '0.15rem' }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <div>
                                        <img src="https://cefrax.websitelayout.net/img/chef_sign.png" alt="img" />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-10 p-0' style={{ border: '6px solid rgba(0,0,0,0.1)', maxHeight: "70vh", overflow: 'hidden' }}>
                                    <img src="https://cefrax.websitelayout.net/img/team/chef-01.jpg" className='w-100' alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chef