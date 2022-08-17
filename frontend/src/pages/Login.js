import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const token = JSON.parse(localStorage.getItem("token"));

    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked)
    }
    
    
    const [formData, setFormData] = useState({
        email: localStorage.getItem('email'),
        password: "" 
    });

    useEffect(() => {
        if(token) {
            window.location.href = "/home";
        }
    },[token]);


    const HandleChange = (e) => {
        setFormData({...formData , [e.target.name]:e.target.value});
   }

   const loginHandler = async(e) => {
        e.preventDefault();

        if(formData.email === "" || formData.password === "") {
            alert("Lengkapi Field")
            return;
        }

        await axios.post('http://127.0.0.1:8000/api/login', formData)
        .then((response) => {
            localStorage.removeItem('email')
            if(checked === true) {
                localStorage.setItem('email', formData.email)
            }
            localStorage.setItem('token', JSON.stringify(response.data.token));
            window.location.href = "/home";
        })
        .catch((err) => {
            return err
        })
   }

    return (
        <div className="h-screen m-auto">
            <div hidden className="fixed inset-0 w-5/12 text-white lg:block">
                <img className="w-full h-full object-cover" src="/images/bg1.png" alt="bg1" />
                <div className="absolute inset-0 bg-ov bg-opacity-20"></div>
            </div>
            <div className="relative h-full ml-auto lg:w-7/12 flex items-center">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="space-y-5">
                        <a href="/">
                            <img src="/images/logo.png" className="w-64 inline" alt="devla logo" />
                        </a>
                        <p className="font-medium text-lg text-gray-500">Welcome to Devla ! Login first</p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <button className="py-3 px-6 rounded-xl bg-orange-100 hover:bg-orange-200 focus:bg-orange-200 active:bg-orange-300">
                            <div className="flex gap-4 justify-center">
                                <img src="/images/google.png" className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-black">with Google</span>
                            </div>
                        </button>
                        <button className="py-3 px-6 rounded-xl bg-orange-100 hover:bg-orange-200 focus:bg-orange-200 active:bg-orange-300">
                            <div className="flex gap-4 items-center justify-center text-white">
                                <img src="/images/microsoft.png" className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-black">with Microsoft</span>
                            </div>
                        </button>
                    </div>

                    <div className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">or</span>
                    </div>

                    <form method='POST' onSubmit={loginHandler} className="space-y-6 mt-10">
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={(e) => HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 outline-none focus:ring-2 focus:ring-red-400 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>

                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={(e) => HandleChange(e)} className="w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 outline-none focus:ring-2 focus:ring-red-400 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>

                        <div className="flex justify-between -mt-2">
                            <div className="form-group form-check">
                                <input type="checkbox" className="accent-orange-500 form-check-input h-4 w-4 border border-orange-500 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" checked={checked} onChange={handleCheck} />
                                <label className="text-sm form-check-label inline-block text-orange-500" htmlFor="exampleCheck2">Remember me</label>
                            </div>
                            <button type="reset" className="w-max">
                                <span className="text-sm tracking-wide text-gray-500"><a href="/forgot">Forgot password ?</a></span>
                            </button>
                        </div>

                        <div className="text-center">
                            <button className="w-full px-6 py-3 rounded-xl bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                                <span className="font-semibold text-white text-lg">Login</span>
                            </button>
                            <p className="w-max p-3 mx-auto">
                                <span className="text-sm tracking-wide">Don't have an account? <a href="/register" className="text-sm text-orange-500">Register</a></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;