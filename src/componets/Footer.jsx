import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer_2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="nav_box_1">
                                <a className='box_1_a' href="#!">Главная</a>
                                <a className='box_1_a' href="#!">О нас</a>
                                <a className='box_1_a' href="#!">Наши преимущества</a>
                                <a className='box_1_a' href="#!">Курсы</a>
                                <a className='box_1_a' href="#!">Контакты</a>
                                <a className='box_1_a' href="#!">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between pt-5 pb-5 align-items-center">
                            <div className="footer_3_h1">© 2022. All rights reserved.</div>
                            <div className="footer_3_box">
                                <a href="!#"><img src="/image/teleg_2.png" alt="" /></a>
                                <a href="!#"><img src="/image/inst_2.png" alt="" /></a>
                                <a href="!#"><img src="/image/youtube_2.png" alt="" /></a>

                            </div>
                            <a target={'_blank'} rel="noreferrer" href='https://kokoagency.uz/' className="footer_3_h1">Bahtwoman by <span>kOkO digital agency</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer