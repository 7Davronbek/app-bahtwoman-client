import React from 'react'

const Weimg = () => {
    return (
        <><div className="Weimg">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className='mb-4'><img className='w-100' src="/image/we_3.png" alt="" /></div>
                        <div><img className='w-100' src="/image/we_4.png" alt="" /></div>
                    </div>
                    <div className="col-5"><img style={{ height: "100%", objectFit: "cover" }} className='w-100' src="/image/we_1.png" alt="" /></div>
                    <div className="col-3"><img className='w-100' src="/image/we_2.png" alt="" /></div>
                </div>
            </div>
        </div></>
    )
}

export default Weimg