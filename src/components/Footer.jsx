import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <div className='foot'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-10">
                            <h5 className='text-e mb-3'>Address</h5>
                            <p className='w-25 bg-red' style={{ height: '0.2rem' }}></p>
                            <p className='mb-4' style={{ color: '#b7b7b7' }}>74 Norava Street, 542B Town 51 MT.</p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-10">
                            <h5 className='text-e mb-3'>Timing</h5>
                            <p className='w-25 bg-red' style={{ height: '0.2rem' }}></p>
                            <p style={{ color: '#b7b7b7' }}>Monday - Thursday 10:00 AM - 7:00 PM</p>
                            <p className='mb-4' style={{ color: '#b7b7b7' }}>Friday - Saturday 10:00 AM - 3:00 PM</p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-10">
                            <h5 className='text-e mb-3'>Contact</h5>
                            <p className='w-25 bg-red' style={{ height: '0.2rem' }}></p>
                            <p style={{ color: '#b7b7b7' }}>(+44) 123 456 789</p>
                            <p className='mb-4' style={{ color: '#b7b7b7' }}>addyour@emailhere</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center fooot' >
                © 2018 CEFRAX IS POWERED BY CHITRAKOOT WEB
            </div>
        </footer>
    )
}

export default Footer