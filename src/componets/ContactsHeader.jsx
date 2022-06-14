import React, { useState } from 'react'
import axios from "axios"
import { API_PATH } from '../constants/tools'

const ContactsHeader = () => {
    const [name, setName] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [message, setMessage] = useState('')
    const sent = (e) => {
        e.preventDefault()
        axios.post(API_PATH, { name, phone_number, message })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="contactsHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zed">
                            <h1>Мы с нестерпением ждём вас</h1>
                        </div>
                        <div className="col-lg-3 zed myCol">
                            <img src="/image/contacts.png" alt="" />
                        </div>
                        <div className="col-lg-9 zed">

                            <form onSubmit={sent}>
                                <div className="d-flex align-items-center w-100 justify-content-between">
                                    <div className="cards">
                                        <input placeholder='Имя' className='form-control' value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' />
                                        <span className='icon icon-form1'>  </span>
                                    </div>
                                    <div className="cards ms-3">
                                        <input placeholder='Номер телефона' className='form-control' value={phone_number} onChange={(e) => setPhone_number(e.target.value)} type="text" name='phone_number' />
                                        <span className='icon icon-form2'>  </span>
                                    </div>
                                </div>
                                <div className="cards">
                                    <textarea placeholder='Коментарии' rows={5} className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} type="text" name='message' />
                                    <span className='icon icon-form4'>  </span>
                                </div>
                                <button className='myBtn btn' type='submit'>Отправить </button>    
                            </form>

                        </div>
                    </div>
                </div>
                <div className="blur"></div>
            </div>
        </>
    )
}

export default ContactsHeader