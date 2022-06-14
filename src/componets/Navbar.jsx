import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9 d-flex align-content-center justify-content-center ">
                            <div className="nav_box_1">
                                <Link to='/' className='box_1_a' >Главная</Link>
                                <Link to='/We' className='box_1_a' href="">О нас</Link>
                                <Link to='/Courses' className='box_1_a' href="">Темы курсов</Link>
                                <Link to='/catalog' className='box_1_a' >Курсы</Link>
                                <a className='box_1_a' href="">Контакты</a>
                                <Link to='/Theme' className='box_1_a' href="">FAQ</Link>
                            </div>
                            <div className="nav_box_2 ms-auto">
                                <a className='box_2_a' href="">РУ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar