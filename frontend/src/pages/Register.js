import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from "../components";


function Register(props) {
    const {alert, setAlert} = props;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    })

    const HandleChange = (e) => {
         setFormData({...formData , [e.target.name]:e.target.value});
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        if(formData.name === "" || formData.username === "" || formData.email === "" || formData.password === "") {
            setTimeout(() => {
                setAlert({isOpen:false});
            },5000)

            return setAlert({
                isOpen:true,
                title:"Field masih kosong!",
                message:"Ayo diisi.",
            });
        }

        await axios.post('http://127.0.0.1:8000/api/register', formData)
        .then(() => {
            window.location.href = "/";
        })
        .catch((err) => {
            const { response:{ data } } = err;

           setAlert({
            isOpen:true,
            message:data.message,
            title:data.title,
            variant:"bg-red-100",
            textVariant:"text-red-800",
           });
        })

        setTimeout(() => {
            setAlert({isOpen:false});
        },5000)
    };

    return (
        <div className="h-screen m-auto">
            <div hidden className="fixed inset-0 w-5/12  text-white lg:block">
                <img className="w-full h-full object-cover" src="/images/bg1.png" alt="bg1" />
                <div className="absolute inset-0 bg-ov bg-opacity-20"></div>
            </div>
            <div className="relative h-full ml-auto lg:w-7/12 flex items-center">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="space-y-5">
                        <a href="/">
                            <img src="/images/logo.png" className="w-60 inline" alt="devla logo" />
                        </a>
                        <p className="font-medium text-lg text-gray-500">Welcome to Devla ! Register first</p>
                    </div>

                    <form method='POST' onSubmit={registerHandler} className="space-y-6 mt-10">
                        {alert.isOpen ?  <Alert alert={alert} setAlert={setAlert}/> : null}
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <input type="name" placeholder="Name" name="name" value={formData.name} onChange={(e) =>HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>

                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <input type="username" placeholder="Username" name="username" value={formData.username} onChange={(e) => HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>

                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <input type="email" placeholder="Email" name="email"  value={formData.email} onChange={(e) => HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
                            
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={(e) => HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
            
                        <div className="text-center">
                            <button className="w-full px-6 py-3 rounded-xl bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                                <span className="font-semibold text-white text-lg">Register</span>
                            </button>
                            <p className="w-max p-3 mx-auto">
                                <span className="text-sm tracking-wide">Already have an account? <a href="/" className="text-sm text-orange-500">Login</a></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register;