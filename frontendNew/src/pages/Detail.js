import React, { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode'
import axios from 'axios';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import 'swiper/css';

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Detail() {

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

    useEffect(() => {
        if(!token) {
            window.location.href = "/";
        }

        if(userGoogle) {}
        fetchData()

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
    <div>
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
      
    <img src="/assets/image 85.jpg" className="relative justify-items-end mt-10  desktop: w-[1313px] desktop: h-[498px] phone:w-[400px]
    phone:h-[100px] phone:mt-4   rounded-xl m-auto" alt="" />
    </section>
    <div className=" mt-9 ml-40 phone:ml-2 phone:mt-2 phone:text-[10px] text-gray-300  font-bold sm:text-left">
Style / Fashion
    </div>
    <div className=" -mt-1 ml-40 phone:ml-2 phone:text-[20px] tablet:text-5xl text-3xl text-303030  font-medium text-[35px]">
    Fashion College Creator 
    </div>
    <div className=" -mt-20 text-right p-10 phone:-mt-[80px] -mr-32">
    <button className=" w-[200px] h-[60px] mr-10 phone:w-14 phone:h-[22px] phone:ml-[280px] phone:mb-[200px] phone:rounded-xl rounded-full bg-orange-500 transition hover:bg-orange-800 focus:bg-orange-800 active:bg-orange-800" >
                        <p className="font-semibold text-white text-center  phone:text-[8px]">Live View</p>
                    </button>
                    <button className=" w-[200px] h-[60px] mr-10 phone:w-14 phone:h-[22px] phone:ml-[280px] phone:mb-[200px] phone:rounded-xl rounded-full bg-orange-500 transition hover:bg-orange-800 focus:bg-orange-800 active:bg-orange-800" >
                        <p className="font-semibold text-white text-center  phone:text-[8px]">Saved</p>
                    </button>
                    <button className=" w-[200px] h-[60px] mr-64 phone:w-14 phone:h-[22px] phone:ml-[280px] phone:mb-[200px] phone:rounded-xl rounded-full bg-pink-500 transition hover:bg-pink-800 focus:bg-pink-800 active:bg-pink-800" >
                        <p className="font-semibold text-white text-center  phone:text-[8px]">Like</p>
                    </button>
                   

                </div>
              
                
               
                <div class="mt-8 ml-40 phone:-mt-48 phone:ml-2 flex flex-row space-x-[6px] items-center">
                                        <img src="/assets/muka1.jpeg" class="h-7 w-7 mr-2 phone:h-4 phone:w-4 rounded-full" alt="" />
                                        <img src="/assets/logoverified.png" class="h-5 w-5 mr-2  phone:w-3 phone:h-3" alt="" />
                                        <label className="font-medium text-gray-700 phone:text-[12px]">John Doe</label>
                                        <label className=" font-medium text-orange-400 phone:text-[12px]">Follow</label>
                                    </div>
                                    <div className="mt-8 ml-40 flex flex-wrap justify-between items-center  phone:ml-2 ">
                                    <div className="flex flex-wrap">
                                    <div>
                                        <img src="/assets/detail2.png" className=" mb-2 w-[390px]  phone:w-[115px]" alt="" />
                                        <img src="/assets/detail4.png" className=" mb-10  w-[390px] phone:w-[115px]" alt="" />
                                    </div>
                                    <div className='ml-10 phone:ml-2'>
                                        <img src="/assets/detail3.png" className=" mb-2 w-[390px]   phone:w-[115px]" alt="" />
                                        <img src="/assets/detail5.png" className=" mb-10 w-[390px]  phone:w-[115px]" alt="" />
                                        </div>
                                    </div>
                                        <div className=" phone:-mt-[245px] phone:ml-64 mr-40 -mt-10 border-2 phone:ml-2 border-gray-400 rounded-md">
                                        <div className=" mt-16 ml-16 phone:mt-2 phone:mr-4 phone:ml-4 text-3xl phone:text-[10px] text-303030 font-medium ">
    Detail: 
    </div>
    <div className="  mt-8 ml-16 phone:-mt-2 phone:mr-4 phone:ml-4 phone: phone:text-[10px] text-3xl text-303030 font-semibold">
    $499.00
    </div>
    <div className="ml-16 mt-6 flex flex-row space-x-2">
        <img src="assets/star.png" className="" />
    </div>
    <div className=" mt-8 ml-16 phone:-mt-1  phone:ml-4 phone:text-[6px] text-gray-400">
    What is it?
A collection of graphic elements +<br/> pre-made templates to create your<br/> own fashion collages. Add variety to<br/>
 your blog, website, Instagram, 
</div>
<div className="phone:-mb-6 phone:-mt-12 mt-6 phone:mr-0 text-center p-10">
                    <button className="phone:w-16 phone:h-4 w-[476.34px] h-20  rounded-full bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                        <p className="font-semibold -mt-1.5 phone:text-[6px] text-white text-lg">Purchase Now</p>
                    </button>
                </div>
     </div>
     </div>
     <div>
    <nav className="mt-10 mb-36 flex flex-row items-center bg-white border-gray-100 border-t-2 w-full sm:px-4 py-4 rounded">
    <div className="container">
    <a href="index.html" className="">
                <img src="/assets/logo.png" className=" mt-36 ml-36 w-32" alt="Devla Logo" />
            </a>
          <div className="mt-[28px] ml-36 text-gray-400"> Devla is the international design template community for<br/> creative individuals to sell your self-made template design<br/> , grow your business, and buy your very own<br/> template design.
          </div> 
          
    </div>
    <div className="mt-32 -ml-6 flex flex-col space-y-4">
    <div className="text-lg font-bold" > For Designer </div>
    <div className="space-y-4" > 
    <div>Go pro!</div>
    <div>Explore Design Work </div>
   <div>Go pro!</div>
   <div>Go pro!</div>
   <div>Go pro!</div>
    </div>
          </div>
          <div className=" mt-32 -ml-96 flex flex-col space-y-4">
    <div className="text-lg font-bold" > For Designer </div>
    <div className="space-y-4" > 
    <div>Go pro!</div>
    <div>Explore Design Work </div>
   <div>Go pro!</div>
   <div>Go pro!</div>
   <div>Go pro!</div>
    </div>
          </div>
           <div className=" mt-32 -ml-96 flex flex-col space-y-4">
    <div className="text-lg font-bold" > For Designer </div>
    <div className="space-y-4" > 
    <div>Go pro!</div>
    <div>Explore Design Work </div>
   <div>Go pro!</div>
   <div>Go pro!</div>
   <div>Go pro!</div>
    </div>
          </div>
          <div className=" mt-32 -ml-96 flex flex-col space-y-4">
    <div className="text-lg font-bold" > For Designer </div>
    <div className="space-y-4 " > 
    <div>Go pro!</div>
    <div>Explore Design Work </div>
   <div>Go pro!</div>
   <div>Go pro!</div>
   <div>Go pro!</div>
    </div>
          </div>
          
    </nav>
    <section className="bg-gray-600">
            <p className="text-center text-xl p-2 text-gray-400">© Copyright 2022 Devla. All Rights Reserved.</p>
        </section>
</div>
    </div>

    
)
};
export default Detail;