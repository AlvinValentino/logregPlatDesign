import React, { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';
import '../fonts/Inter-VariableFont_slnt,wght.ttf';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { dataGrids, dataUsers } from '../constants/Data';
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneHeart,AiFillEye } from "react-icons/ai";

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Product() {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);
    // const [data, setDatas] = useState([])
    const userData = decode(users ? users : userGoogle).data
  
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
            window.location.href = "/"
        }

        if(userGoogle) {}
        fetchData()
    }, []);

    const [formData, setFormData] = useState({
        search: "",
        id: userData.id,
        username: "",
        avatar: ""
    })

    const HandleChange = (e) => {
        setFormData({...formData , [e.target.name]:e.target.value});
    }

    const searchHandler = async(e) => {
        if(e.key === 'Enter') {
            e.preventDefault()

            await axios.post('http://localhost:8000/api/search', formData)
            .then((response) => {
                const { data } = response.data
                // setDatas(data)
            })
        }

    }
  
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
                            <a href="/home" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 text-[14px]" aria-current="page">Home</a>
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
      <div className='relative inset-0 text-white'>
      <img src="/assets/body2.png" class="w-full h-full object-cover" alt="" />
            <div class="absolute inset-0 bg-ov bg-opacity-20 flex px-10 items-center w-full">
                <div class="flex-col w-full mx-auto container">
                    <p class=" text-2xl text-[72px] font-semibold">Search Templates</p>
                    <p class=" text-xs font-medium text-[24px] pt-10">Over 10.000+ website templates</p>
                </div>
            </div>
          </div>
      </section>

    <section className='bg-gray-50 pb-5'>
      <div class="mx-auto pt-5 container">
            <form class="flex flex-row items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" value={formData.search} name="search" onChange={(e) => HandleChange(e)} id="search" class="font-regular text-[18px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5" placeholder="Search" />
                </div>
                <button type="button" class="text-gray-900 text-sm rounded-lg flex items-center justify-between p-5">
                    <p class=" font-light text-[18px] text-gray-600">Popular</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <button type="button" class="text-gray-900 text-sm rounded-lg flex items-center justify-between p-5">
                    <p class="font-light text-[18px] text-gray-600">Filters</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </form>
    </div>

    <div class="mx-auto mt-5 container">
        <div className="grid grid-cols-12 gap-4 mt-4">
           {dataGrids.map((data, idx) => (
              <div className="w-full col-span-4" key={idx}>
                <a href="/detail">
                <img src={data.image} className="w-full"/>
                </a>
                <div className="flex items-center py-3 justify-between">
                  <span className="flex items-center text-gray-500">
                    <img src='/assets/muka1.jpeg' className="w-[30px] h-[30px] rounded-2xl text-xl mr-1"/>
                    <p className="font-medium">{data.title}</p>
                  </span>
                  <div className="flex items-center">
                  <span className="flex items-center text-gray-500">
                    <AiFillEye className="text-xl mr-1"/>
                    <p className="font-medium">{data.download}</p>
                  </span>
                  <span className="flex items-center ml-4 text-gray-500">
                    <AiTwotoneHeart className="text-xl mr-1"/>
                    <p className="font-medium">{data.like}</p>
                  </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        </section>
    
            
        <section class="p-8">
            <div class="mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 overflow-x-auto">
                <div class="relative w-5/12 space-y-4">
                    <img src="/assets/logo.png" alt="" class="h-16 w-18" />
                    <p class="text-regular text-[16px] italic text-585858 max-w-md">Devla is the international design template 
                    community for creative individuals to sell your self-made template design , grow your business, and buy your very own template design.</p>
                </div>
            <div className='flex-col'>
                <p className='font-medium text-2xl mb-3 text-[18px]'>For Designer</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro!</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Explore Design Work</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Design Blog</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
            </div>
            <div className='flex-col'>
                <p className='font-medium text-2xl mb-3 text-[18px]'>For Designer</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro!</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Explore Design Work</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Design Blog</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
            </div>
            <div className='flex-col'>
                <p className='font-medium text-2xl mb-3 text-[18px]'>For Designer</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro!</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Explore Design Work</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Design Blog</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
                <p className='font-regular text-lg mb-3 text-[14px]'>Go Pro</p>
            </div>
        </div>
      </section>
        <section className='bg-gray-600'>
            <p className='font-semibold text-center text-xl p-2 text-gray-400 text-[18px]'>
                © Copyright 2022 Devla. All Rights Reserved.
            </p>
        </section>
    </div>
  )
}

export default Product
