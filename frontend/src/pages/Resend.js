import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Resend() {
    const khusus = localStorage.getItem('khusus')
    const email = localStorage.getItem('email')

    const token = useState()

    useEffect(() => {
        if(!khusus) {
            window.location.href = '/forgot'
        }
    })

    const resendHandler = async(e) => {
        e.preventDefault()

        await axios.post('http://localhost:8000/api/resend', email)
        .then(() => {
            window.location.href = '/resend'
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="h-screen m-auto">
            <div hidden className="fixed inset-0 w-5/12 text-white lg:block">
                <img className="w-full h-full object-cover" src="/images/bg1.png" alt="" />
                <div className="absolute inset-0 bg-ov bg-opacity-20"></div>
            </div>
            <div className="relative h-full ml-auto lg:w-7/12 flex items-center">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="space-y-5 mb-12">
                        <a href="/resend">
                            <img src="/images/logo.png" className="w-64" alt="devla logo" />
                        </a>
                    </div>
                    <form onSubmit={resendHandler} method='POST'>
                        <div className="flex justify-center mt-12">
                            <button className="text-right w-max">
                                <span className="text-sm tracking-wide text-gray-500">Didn't get email message? <span className="font-bold">Resend</span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Resend