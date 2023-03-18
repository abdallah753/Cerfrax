import React, { Fragment, useEffect, useRef, useState } from 'react'
import './Menu.css'
import MenuItem from './MenuItem'
import data from "./Menu.json"
function Menu() {
    let animat = useRef()
    let [lll, setlll] = useState(0)
    addEventListener('scroll', () => {
        if (scrollY > 860) {
            setlll(lll + 1)
        }
    })
    useEffect(() => {
        if (scrollY > 860) {

            animat.current.classList.add('animatt')
        }
    }, [lll])
    return (
        <>
            <section className='menu position-relative' id='Menu'>
                <div className='position-absolute d-none d-md-block menu-img' ref={animat}>
                    <img src="https://cefrax.websitelayout.net/img/menu-corner.png" alt="img" />
                </div>
                <div className='container'>
                    <h4 className='text-red text-center z-index-5'>__ Discover our popular dishes</h4>
                    <h3 className='text-center fw-bold mb-5'>OUR MENU</h3>
                    <div className='row justify-content-center'>
                        {data.map((ele) => {
                            return <Fragment key={Math.random() * 9.5}><MenuItem ele={ele} /></Fragment>
                        })}
                    </div>
                </div>
            </section>
            <section className='after-menu'>
                <h4 className='text-red text-center'>__ Amazing</h4>
                <h3 className='text-center text-e mb-5'>DELICIOUS</h3>
                <div className='slide carousel' id="after-menu">
                    <div className="carousel-indicators mb-0">
                        <button type="button" data-bs-target="#after-menu" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#after-menu" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="container">
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className="row m-0 align-items-center">
                                    <div className='col-lg-7 mb-5'>
                                        <img className='w-100' style={{ border: '8px solid rgba(255, 255, 255, 0.2)' }} src="https://cefrax.websitelayout.net/img/main-course.jpg" alt="" />
                                    </div>
                                    <div className='bg-light col-lg-5 py-3 px-0 ooo' style={{ border: '8px solid rgba(0, 0, 0, 0.2)', boxSizing: 'border-box' }}>
                                        <div>
                                            <h5 className='text-red ms-3'>__ Main Course</h5>
                                            <ul className='navbar-nav w-100' style={{ padding: '0 20px 0 0' }}>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Fish Tikka Masala</p>
                                                    <span>$24</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Tuna Salad Sandwich</p>
                                                    <span>$215</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Lightly Fried Shrimp</p>
                                                    <span>$134</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Basil Roasted Chicken</p>
                                                    <span>$389</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Mutton Food Inn Special</p>
                                                    <span>$877</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className="row m-0 align-items-center">
                                    <div className='col-lg-7 mb-5'>
                                        <img className='w-100' style={{ border: '8px solid rgba(255, 255, 255, 0.2)' }} src=" https://cefrax.websitelayout.net/img/desserts.jpg" alt="" />
                                    </div>
                                    <div className='bg-light col-lg-5 py-3 px-0 ooo' style={{ border: '8px solid rgba(0, 0, 0, 0.2)', boxSizing: 'border-box' }}>
                                        <div>
                                            <h5 className='text-red ms-3'>__ Dessert</h5>
                                            <ul className='navbar-nav w-100' style={{ padding: '0 20px 0 0' }}>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Mini Cupcakes</p>
                                                    <span>$32</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Whole Pie Or Cake</p>
                                                    <span>$90</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Fruit with Ice Cream</p>
                                                    <span>$42</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>Chocolate Chip Cookies</p>
                                                    <span>$25</span>
                                                </li>
                                                <li className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <img src="https://cefrax.websitelayout.net/img/dish.png" alt="" />
                                                    </div>
                                                    <p className='m-0 ps-3' style={{ flexGrow: '1' }}>White Chocolate Bread Pudding</p>
                                                    <span>$29</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu