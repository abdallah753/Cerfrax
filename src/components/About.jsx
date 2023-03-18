import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import './About.css'
function About() {

    let animat = useRef()
    let [lll, setlll] = useState(0)
    addEventListener('scroll', () => {
        if (scrollY > 130) {
            setlll(lll + 1)
        }
    })
    useEffect(() => {
        if (scrollY > 150) {
            animat.current.classList.add('animat')
        }
    }, [lll])


    return (
        <section className='position-relative overflow-hidden about' id='About'>
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-lg-5 position-relative col-md-9'>
                        <div className='position-relative aaaa'>
                            <div className=''><img src="https://cefrax.websitelayout.net/img/about-story.jpg" className='z-index-5 w-100' alt="" /></div>
                        </div>
                    </div>
                    <div className='col-lg-7 mt-5 d-flex flex-column justify-content-center'>
                        <h4 className='fw-bold text-red'>__ ABOUT US</h4>
                        <p className='mt-3'>Restaurant food dolor sit amet, consectetur adipisicing elit, sed do eiusmod eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptate.</p>
                        <p className='mt-2'>Cafe ut perspiciatis unde omnis iste natus error sit voluptatem totam rem aperiam, eaque ipsa quae ab illo inventore veritatis dicta sunt explicabo.</p>
                        <a className='btn btn-red text-e' style={{ width: 'fit-content' }} href='#Book'>Book Now</a>
                    </div>
                </div>
            </div>
            <div className={`img-about position-absolute}`} ref={animat}>
                <img src="https://cefrax.websitelayout.net/img/about-bg.png" className='w-100' alt="" />
            </div>
        </section>
    )
}

export default About