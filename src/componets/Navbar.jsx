import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const location = useLocation();

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-2"><img src="/image/logo.svg" alt="" className="w-100" /></div>
                        <div className="col-9 ms-auto d-flex align-content-center justify-content-center ">
                            <div className="nav_box_1">
                                <Link to='/' className={`box_1_a ${location.pathname === '/' ? 'active' : ''}`} >Главная</Link>
                                <Link to='/we' className={`box_1_a ${location.pathname === '/we' ? 'active' : ''}`} href="">О нас</Link>
                                <Link to='/courses' className={`box_1_a ${location.pathname === '/courses' ? 'active' : ''}`} href="">Темы курсов</Link>
                                <Link to='/catalog' className={`box_1_a ${location.pathname === '/catalog' ? 'active' : ''}`} >Курсы</Link>
                                <Link to='/contacts' className={`box_1_a ${location.pathname === '/contacts' ? 'active' : ''}`} >Контакты</Link>
                                <Link to='/theme' className={`box_1_a ${location.pathname === '/theme' ? 'active' : ''}`} href="">FAQ</Link>
                            </div>
                            <div className="nav_box_2 ms-auto">
                                <a className='box_2_a' href="!#">РУ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar