import React, { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';
import '../fonts/Inter-VariableFont_slnt,wght.ttf';
import { OrderBuy } from '../components';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'));

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function dynamicClass(menu,currentMenu) {
    if(menu === currentMenu) {
        return "border-orange-500 bg-orange-500 rounded-3xl text-white"
    }

    return ""
}

function MyOrder() {
    const [toggle, setToggle] = useState(true)
    const [menu,setMenu] = useState("All orders")
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);

    const userData = decode(users ? users : userGoogle).data

    const fetchData = async () => {
        axios.post('http://localhost:8000/api/showUser', formData)
        .then((response) => {
            const { data } = response.data
            setFormData({...formData, username: data[0].username, avatar: data[0].avatar})
        })
    }

    // useEffect(() => {
    //     if(!token) {
    //         window.location.href = "/";
    //     }

    //     if(!userGoogle) {
    //         fetchData();
    //     }

    // }, [token]);

    const [formData, setFormData] = useState({
        id: userData.id,
        username: "",
        avatar: ""
    })

    useEffect(() => {
        if(!token) {
            window.location.href = "/"
        }

        if(userGoogle) {}
        fetchData()
    }, [token])

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
        <div className='font-face-inter bg-797979'>
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
                            <a href="/home" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 text-[14px]">Home</a>
                        </li>
                        <li>
                            <a href="/product" className="block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 text-[14px]">Our Products</a>
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
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-row justify-between">
                <p className="desktop:text-[36px] font-semibold">My Order</p>
                <div className="pt-3">
                    {toggle ?
                    <div> 
                        <button className="desktop:w-[100px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[16px]" onClick={() => {setToggle(true)}}>Buy</button>
                        <button className="desktop:w-[100px] desktop:h-[36px] text-[585858] font-medium text-[16px]" onClick={() => {setToggle(false)}}>Sell</button>
                    </div>
                    :
                    <div>
                        <button className="desktop:w-[100px] desktop:h-[36px] text-[585858] font-medium text-[16px]" onClick={() => {setToggle(true)}}>Buy</button>
                        <button className="desktop:w-[100px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[16px]" onClick={() => {setToggle(false)}}>Sell</button>
                    </div>
                    }
                </div>
            </div>
        </section>

        <section>
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-row">
                {toggle ? (
                    <>
                        <button onClick={()=>setMenu("All orders")} className={`desktop:w-[250px] desktop:h-[51px]  ${dynamicClass(menu,"All orders")}`}>All Orders</button>
                        <button onClick={()=>setMenu("Waiting")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"Waiting")} `}>Waiting for payment</button>
                        <button onClick={()=>setMenu("In process")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"In process")}`}>In process</button>
                        <button onClick={()=>setMenu("Succeed")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"Succeed")}`}>Succeed</button>
                        <button onClick={()=>setMenu("Cancelled")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"Cancelled")}`}>Cancelled</button>
                    </>
                ) : (
                    <>
                        <button onClick={()=>setMenu("All orders")} className={`desktop:w-[250px] desktop:h-[51px]  ${dynamicClass(menu,"All orders")}`}>All Orders</button>
                        <button onClick={()=>setMenu("In process")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"In process")}`}>In process</button>
                        <button onClick={()=>setMenu("Succeed")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"Succeed")}`}>Succeed</button>
                        <button onClick={()=>setMenu("Cancelled")} className={`desktop:w-[250px] desktop:h-[51px] ${dynamicClass(menu,"Cancelled")}`}>Cancelled</button>
                    </>
                )}
            </div>
        </section>


        <div>
        {toggle ?
         <OrderBuy menu={menu}/>
        :
        <div>
        <section>
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                    <div className="desktop:w-[1200px] flex justify-between">
                        <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                            <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                        </div>
                        <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                            <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                    <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                        <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                        <div className="flex justify-between">
                            <div className="px-5 w-[586px] h-[149px]">
                                <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                <div className="flex flex-row justify-between mt-8 px-10">
                                    <div>
                                        <p className="font-medium text-[14px] text-gray-400">Customer Name</p>
                                        <p className="font-medium text-[18px] text-black">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[14px] text-gray-400">Payment Method</p>
                                        <p className="font-medium text-[18px] text-black">PayPal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[360px] h-[149px] text-end">
                                <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                <p className="font-regular text-[24px]">$55.00</p>
                                <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                    <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="mx-auto desktop:w-[1314px] mt-20 px-10 flex flex-col">
                <div className="desktop:w-[1314px] desktop:h-[42px] container border bg-585858 rounded-t-[15px] grid place-items-center">
                    <div className="desktop:w-[1200px] flex justify-between">
                        <div className="desktop:w-[233px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Date of purchase</p>
                            <p className="desktop:text-[14px] font-semibold text-white">20 June 2023</p>
                        </div>
                        <div className="desktop:w-[254px] desktop:h-[17px] flex flex-row justify-between">
                            <p className="desktop:text-[14px] font-medium text-white">Transaction Code</p>
                            <p className="desktop:text-[14px] font-semibold text-white">AB-3891204839</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto desktop:w-[1314px] desktop:h-[250px] flex bg-white rounded-b-[15px] grip place-items-center border">
                    <div className="mx-auto desktop:w-[1247px] desktop:h-[158px] flex flex-row">
                        <img src="/assets/myorder.png" className="desktop:w-[299px] desktop:h-[158px]" alt="" />
                        <div className="flex justify-between">
                            <div className="px-5 w-[586px] h-[149px]">
                                <p className="font-medium text-[20px]">Nature Themed E-Commerce Website Template 2022</p>
                                <div className="flex flex-row justify-between mt-8 px-10">
                                    <div>
                                        <p className="font-medium text-[14px] text-gray-400">Customer Name</p>
                                        <p className="font-medium text-[18px] text-black">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-[14px] text-gray-400">Payment Method</p>
                                        <p className="font-medium text-[18px] text-black">PayPal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[360px] h-[149px] text-end">
                                <p className="font-medium text-[14px] text-gray-500">Total Payment</p>
                                <p className="font-regular text-[24px]">$55.00</p>
                                <div className="flex justify-end desktop:w-[360px] desktop:h-[36px] mt-12">
                                    <button className="desktop:w-[159px] desktop:h-[36px] border border-orange-500 bg-orange-500 rounded-3xl text-white font-medium text-[14px]">Payment Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        }
        </div>

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

export default MyOrder;