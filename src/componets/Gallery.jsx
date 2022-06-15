// import React, { useEffect } from 'react'
// import Aos from 'aos';

const Gallery = () => {

    // useEffect(() => {
    //     Aos.init({
            // once: true,
    //         duration: 4000,
    //     })
    // }, [])

    return (
        <>
            <div className="gallery">
                <div className="container">
                    <div className="row">
                        <div data-aos="zoom-in-up" className="gallery_h">
                            Свадебные фотографии
                            наших клиентов
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos="fade-right" className="col-4">
                            <img className='gallery_img' src="/image/gallery_3.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className="col-4">
                            <img className='gallery_img' src="/image/gallery_2.png" alt="" />
                        </div>
                        <div data-aos="fade-left" className="col-4">
                            <img className='gallery_img' src="/image/gallery_3.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className="col-12">
                            <img className='gallery_img mt-4' src="/image/gallery_4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery