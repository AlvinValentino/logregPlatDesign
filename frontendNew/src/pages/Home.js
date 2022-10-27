import React, { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';
import '../fonts/Inter-VariableFont_slnt,wght.ttf';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Products } from '../components';

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Home() {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);
    const userData = decode(users ? users : userGoogle).data

    // const [datas, setDatas] = useState([])

    const fetchData = async () => {
        setUser(userData)

        // await axios.post('http://localhost:8000/api/show')
        // .then((response) => {
        //     const { data } = response.data
        //     setDatas(data)
        // })

        axios.post('http://localhost:8000/api/showUser', formData)
        .then((response) => {
            const { data } = response.data
            setFormData({...formData, username: data[0].username, avatar: data[0].avatar})
        })
    }

    useEffect(() => {
        if(!token) {
            window.location.href = "/";
        }

        if(userGoogle) {}
        fetchData();

    }, [token]);

    const [formData, setFormData] = useState({
        id: userData.id,
        username: "",
        avatar: ""
    })

    const logoutHandler = async (e) => {
        e.preventDefault()

        if(users) {
            localStorage.removeItem('token')
        } else if(userGoogle) {
            localStorage.removeItem('userGoogle')
        }
        window.location.href = '/'
    };

    return (
        <div className='font-face-inter'>
        <nav className="bg-white border-gray-100 border-b-2 px-2 sm:px-4 py-4 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/home" className="flex items-center">
                    <img src="/assets/logo.png" className="mr-3 w-[98px] h-[40px]" alt="Devla Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mobile-menu-button" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto mobile-menu" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a href="/home" className="block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 text-[14px]" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/product" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 text-[14px]">Our Products</a>
                        </li>
                        <li>
                            <a href="/start" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 text-[14px]">Start Selling</a>
                        </li>
                        <Menu as="div" className="relative inline-block">
                        <div class>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 text-sm font-medium text-gray-700 focus:outline-none">
                                <img src={formData.avatar ? formData.avatar : "/assets/muka1.jpeg"} alt="" className="relative bottom-1 w-[30px] h-[30px] rounded-2xl mr-1"/>
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    <span className='text-gray-700 block px-4 py-2 text-sm'>
                                    Signed in as
                                        <br />
                                        <p className="font-bold text-sm">{formData.username}</p>
                                    </span>
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="/profile" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        Profile
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="/myorder" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        My Order
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <p className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <button onClick={logoutHandler}>Sign out</button>
                                    </p>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </ul>
                </div>
            </div>
        </nav>

        <section>
            <div className="mx-auto mt-20 container flex flex-wrap flex-row items-center text-left justify-between px-10">
                <div className="relative w-6/12 space-y-4">
                    <img src="/assets/logo.png" className="w-[255px] h-[105px]" alt="" />
                    <p className="text-[16px] max-w-xl text-gray-400">Devla is the international design template community for creative individuals to sell your self-made template design , grow your business, and buy your very own template design.</p>
                </div>
                <div className="relative h-full ml-auto w-5/12 justify-items-end">
                    <img src="/assets/body1.png" className="w-[537px] h-[370px] m-auto" alt="" />
                </div>
            </div>
        </section>

        <section className="bg-gray-50">
            <div className="mx-auto container mt-20 px-10">
                <div className="text-center">
                    <p className="text-[36px] font-semibold p-10">Our Templates</p>
                </div>
                <Products />
                <div className="text-center p-10">
                    <button className="w-[311px] h-[52px] px-6 py-3 rounded-full bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                        <span className="font-semibold text-white text-[18px]">More Templates</span>
                    </button>
                </div>
            </div>
        </section>

        <section>
            <div className="mx-auto container">
                <div className="text-center">
                    <p className="text-4xl font-semibold p-10 text[36px]">Why Devla ?</p>
                </div>
                <div className="flex justify-center items-center mx-28 mb-10">
                    <div className="flex-1 flex flex-col text-center items-center  mt-22">
                        <img src="/assets/ilus1.png" className="w-[170px] h-[168px] my-10" alt="" />
                        <h1 className="text-[30px] font-medium">Totally Free</h1>
                        <p className="font-regular text-[16px] mt-5 text-gray-400">Our services doesn't includes tax in your purchases. </p>
                    </div>

                    <div className="flex-1 flex flex-col text-center items-center mx-32 mt-22">
                        <img src="/assets/ilus2.png" className="w-[170px] h-[168px] my-10" alt="" />
                        <h1 className="text-[30px] font-medium">Upload your work</h1>
                        <p className="font-regular text-[16px] mt-5 text-gray-400">You can sell your self-made template design in our platform.</p>
                    </div>

                    <div className="flex-1 flex flex-col text-center items-center">
                        <img src="/assets/ilus3.png" className="w-[170px] h-[209px] my-10" alt="" />
                        <h1 className="text-[30px] font-medium">Start earning</h1>
                        <p className="font-regular text-[16px] mt-5 text-gray-400">Start earning incomes by uploading yourself-made template design</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-50">
            <div className="mx-auto container mt-20">
                <div className="text-center">
                    <p className="text-[36px] font-semibold p-10">Sell your templates now</p>
                </div>

                <div className="flex flex-row justify-between overflow-x-auto">
                    <div className="w-full max-w-md dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="px-5">
                                    <p className="text-[30px] font-medium px-10 pt-10">Sign Up</p>
                                    <p className="text-[16px] text-gray-400 font-regular p-10">Sign up now and make an account!</p>
                            </div>
                        </a>
                    </div>

                    <div className="w-full max-w-md dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                            <div className="px-5">
                                <a href="/">
                                    <p className="text-[30px] font-medium px-10 pt-10">Upload your work</p>
                                    <p className="text-[16px] text-gray-400 font-regular p-10">You can upload your work in our platform for free.</p>
                                </a>
                            </div>
                        </a>
                    </div>

                    <div className="w-full max-w-md dark:border-gray-700 mr-5 text-center py-10">
                        <a href="/">
                            <div className="w-20 h-20 bg-white rounded-full m-auto flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[100px] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="px-5">
                                <a href="/">
                                    <p className="text-[30px] font-medium px-10 pt-10">Start earning</p>
                                    <p className="text-[16px] text-gray-400 font-regular p-10">Start earning incomes by uploading yourself-made template design</p>
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 overflow-x-auto">
                <div className="relative w-5/12 space-y-4">
                    <img src="/assets/logo.png" alt="" className="h-[64px] w-[157px]" />
                    <p className="text-[16px] text-gray-400 font-regular max-w-md">Devla is the international design template community for creative individuals to sell your self-made template design , grow your business, and buy your very own template design.</p>
                </div>
                <div className="flex-col">
                    <p className="font-medium text-[18px] mb-5">For Designer</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro!</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Explore Design Work</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Design Blog</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                </div>
                <div className="flex-col">
                    <p className="font-medium text-[18px] mb-5">For Designer</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro!</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Explore Design Work</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Design Blog</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                </div>
                <div className="flex-col">
                    <p className="font-medium text-[18px] mb-5">For Designer</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro!</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Explore Design Work</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Design Blog</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                </div>
                <div className="flex-col">
                    <p className="font-medium text-[18px] mb-5">For Designer</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro!</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Explore Design Work</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Design Blog</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                    <p className="text-[14px] font-regular mb-3 text-gray-600">Go Pro</p>
                </div>
            </div>
        </section>
        <section className="bg-gray-600">
            <p className="text-center text-[18px] font-semibold p-2 text-gray-400">© Copyright 2022 Devla. All Rights Reserved.</p>
        </section>
    </div>
    )
}

export default Home;