import React from 'react'

const Gallery = () => {
    return (
        <>
            <div className="gallery">
                <div className="container">
                    <div className="row">
                        <div className="gallery_h">
                            Свадебные фотографии
                            наших клиентов
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img className='gallery_img' src="/image/gallery_3.png" alt="" />
                        </div>
                        <div className="col-4">
                            <img className='gallery_img' src="/image/gallery_2.png" alt="" />
                        </div>
                        <div className="col-4">
                            <img className='gallery_img' src="/image/gallery_3.png" alt="" />
                        </div>
                        <div className="col-12">
                            <img className='gallery_img mt-4' src="/image/gallery_4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery