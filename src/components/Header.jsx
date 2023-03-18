import React from 'react'
import './Header.css'
function Header() {

    return (
        <header id='Home' className='header bg-img position-relative' >
            class
            <nav className='navbar navbar-expand-lg z-index-5 bg-transparent border-0-md' >
                <div className='container'>
                    <p className='navbar-brand' style={{ width: "125px" }}><img src="https://cefrax.websitelayout.net/img/logo-light.png" className='w-100' alt="imge" /></p>
                    <button className='navbar-toggler btn-red' data-bs-toggle="collapse" data-bs-target="#nav-ul">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='nav-ul'>
                        <ul className='navbar-nav ms-auto' style={{ fontSize: "15px" }}>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Home">HOME</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#About">ABOUT</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Menu">MENU</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Our chef">OUR CHEF</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Gallary">GALLARY</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Blog">BLOG</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link' href="#Contact">CONTACT</a></li>
                            <li className='nav-item fw-bold'><a className='nav-link btn btn-red' href="#Book">BOOK A TABLE</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className='col-12 d-flex align-items-center' style={{ height: '70vh' }}>
                    <div id='slide' className='carousel position-initial slide w-100 z-index-5'>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#slide" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#slide" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#slide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className='overflow-hidden w-75 mx-auto'>
                                    <h3 className='text-red a-h3'>Delicious Food</h3>
                                    <h1 className='text-e a-h1' style={{ fontSize: '60px' }}>Bring The Spouse!</h1>
                                    <p style={{ fontSize: '18px' }} className='text-e a-p'>Tasty, delicious food ready in restaurant. We respect your test review.</p>
                                    <a href="#" className='btn btn-red text-e a-a' style={{ textTransform: 'uppercase' }}>Learn More</a>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className='text-center overflow-hidden w-75 mx-auto'>
                                    <h3 className='text-red a-h3'>Delicious Food</h3>
                                    <h1 className='text-e a-h1' style={{ fontSize: '60px' }}>Bring The Family!</h1>
                                    <p style={{ fontSize: '18px' }} className='text-e a-p'>Tasty, delicious food ready in restaurant. We respect your test review.</p>
                                    <a href="#" className='btn btn-red text-e a-a' style={{ textTransform: 'uppercase' }}>Learn More</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='text-end overflow-hidden w-75 mx-auto'>
                                    <h3 className='text-red a-h3'>Delicious Food</h3>
                                    <h1 className='text-e a-h1' style={{ fontSize: '60px' }}>Bring The Frindes!</h1>
                                    <p style={{ fontSize: '18px' }} className='text-e a-p'>Tasty, delicious food ready in restaurant. We respect your test review.</p>
                                    <a href="#" className='btn btn-red text-e a-a' style={{ textTransform: 'uppercase' }}>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="overlay"></div>
        </header>
    )
}

export default Header

/*
<ol className='carousel-indicator'>
                        <li data-target="#slide" data-slide-to="0" className='active'></li>
                        <li data-target="#slide" data-slide-to="1" ></li>
                        <li data-target="#slide" data-slide-to="2" ></li>
                    </ol> */