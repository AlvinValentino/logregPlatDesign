import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Home() {

    const [user, setUser] = useState({});
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

    const fetchData = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.get('http://localhost:8000/api/user')
        .then((response) => {
            setUser(response.data);
        })
    }

    useEffect(() => {
        if(!token) {
            window.location.href = "/";
        }
        fetchData();
    }, [token]);

    const logoutHandler = async () => {
        setToken(localStorage.setItem("token", null))
    };

    return (
        <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="index.html" className="flex items-center">
                    <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Devla Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Products</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Start Selling</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <section>
            <div className="mx-auto mt-10 container flex flex-row items-center justify-between">
                <div className="relative w-6/12 space-y-4">
                    <p className="font-bold text-5xl text-303030">Lorem ipsum dolor sit amet</p>
                    <p className="text-2xl italic text-585858 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="relative h-full ml-auto w-5/12 justify-items-end">
                    <img src="/assets/body1.png" className="max-h-96 m-auto" alt="" />
                </div>
            </div>
        </section>

        <section className="bg-gray-50">
            <div className="mx-auto container mt-20">
                <div className="text-center">
                    <p className="text-4xl font-medium p-10">Our Templates</p>
                </div>

                <div className="flex flex-row justify-between overflow-x-auto">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between overflow-x-auto mt-10">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                        <a href="/">
                            <img className="p-8 rounded-t-lg" src="/assets/card1.png" alt="" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="/">
                                <h5 className="truncate ... overflow-hidden text-xl font-semibold tracking-tight text-gray-900 dark:text-white ...">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className="flex items-center mb-3"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 99.000</span>
                                <div className="flex flex-row items-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-bg-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <a href="/">Like </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-10">
                    <button className="w-full max-w-sm px-6 py-3 rounded-full bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                        <span className="font-semibold text-white text-lg">More Templates</span>
                    </button>
                </div>
            </div>
        </section>

        <section>
            <div className="mx-auto container">
                <div className="text-center">
                    <p className="text-4xl font-medium p-10">Why Devla ?</p>
                </div>

                <div className="flex flex-row justify-between overflow-x-auto mb-10 mx-28">
                    <div className="text-center max-w-mini mr-44">
                        <img src="/assets/ilus1.png" className="w-52 h-52 m-10" alt="" />
                        <h1 className="text-3xl font-medium">Totally Free</h1>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="text-center max-w-mini mr-44">
                        <img src="/assets/ilus2.png" className="w-52 h-52 m-10" alt="" />
                        <h1 className="text-3xl font-medium">Upload your work</h1>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>

                    <div className="text-center max-w-mini">
                        <img src="/assets/ilus3.png" className="w-52 h-52 m-10" alt="" />
                        <h1 className="text-3xl font-medium">Start earning</h1>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-50">
            <div className="mx-auto container mt-20">
                <div className="text-center">
                    <p className="text-4xl font-medium p-10">Sell your templates now</p>
                </div>

                <div className="flex flex-row justify-between overflow-x-auto">
                    <div className="w-full max-w-md dark:bg-gray-800 dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="px-5">
                                <button onSubmit={logoutHandler}>
                                    <p className="text-3xl font-medium p-10">Logout</p>
                                    <h5 className="overflow-hidden text-xl tracking-tight text-gray-900 dark:text-white ...">Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit, sed do eiusmod tempor </h5>
                                </button>
                            </div>
                        </a>
                    </div>

                    <div className="w-full max-w-md dark:bg-gray-800 dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                            <div className="px-5">
                                <a href="/">
                                    <p className="text-3xl font-medium p-10">Upload your work</p>
                                    <h5 className="overflow-hidden text-xl tracking-tight text-gray-900 dark:text-white ...">Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit, sed do eiusmod tempor </h5>
                                </a>
                            </div>
                        </a>
                    </div>

                    <div className="w-full max-w-md dark:bg-gray-800 dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="px-5">
                                <a href="/">
                                    <p className="text-3xl font-medium p-10">Start earning</p>
                                    <h5 className="overflow-hidden text-xl tracking-tight text-gray-900 dark:text-white ...">Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit, sed do eiusmod tempor </h5>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <button className="w-full max-w-sm px-6 py-3 rounded-full bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800 mb-20">
                        <span className="font-semibold text-white text-lg">Sign Up</span>
                    </button>
                </div>
            </div>
        </section>
        <section>
            <div className="mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 overflow-x-auto">
                <div className="relative w-5/12 space-y-4">
                    <img src="/assets/logo.png" alt="" className="h-16 w-max" />
                    <p className="text-2xl italic text-585858 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className="flex-col">
                    <p className="font-bold text-2xl mb-5">For Designer</p>
                    <p className="text-lg mb-5">Go Pro!</p>
                    <p className="text-lg mb-5">Explore Design Work</p>
                    <p className="text-lg mb-5">Design Blog</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                </div>
                <div className="flex-col">
                    <p className="font-bold text-2xl mb-5">For Designer</p>
                    <p className="text-lg mb-5">Go Pro!</p>
                    <p className="text-lg mb-5">Explore Design Work</p>
                    <p className="text-lg mb-5">Design Blog</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                </div>
                <div className="flex-col">
                    <p className="font-bold text-2xl mb-5">For Designer</p>
                    <p className="text-lg mb-5">Go Pro!</p>
                    <p className="text-lg mb-5">Explore Design Work</p>
                    <p className="text-lg mb-5">Design Blog</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                    <p className="text-lg mb-5">Go Pro</p>
                </div>
            </div>
        </section>
        <section className="bg-gray-600">
            <p className="text-center text-xl p-2 text-gray-400">© Copyright 2022 Devla. All Rights Reserved.</p>
        </section>
    </div>
    )
}

export default Home;