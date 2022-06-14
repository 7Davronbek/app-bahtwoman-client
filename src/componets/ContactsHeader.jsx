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
                            <form onSubmit={sent}>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name='name' />
                                <input value={phone_number} onChange={(e) => setPhone_number(e.target.value)} type="text" name='phone_number' />
                                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" name='message' />
                                <button type='submit'>Send </button>
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