import { useState, useEffect, Fragment } from "react"
import decode from "jwt-decode";
import { AiFillEye,AiFillHeart } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { SellerContent } from "../components";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Seller = () => {
    const [category,setCategory] = useState("Products");
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle)
    const userData = decode(users ? users : userGoogle).data

    function dynamicClass(category , currentCategory) {
       if(category === currentCategory) {
        return "bg-orange-500 text-white rounded-full";
       }

       return ""
    }
    
   
    const fetchData = () => {
      setUser(userData)

      axios.post('http://localhost:8000/api/showUser', formData)
        .then((response) => {
            const { data } = response.data
            setFormData({...formData, username: data[0].username, avatar: data[0].avatar})
        })
    }
  
    useEffect(() => {
      if (!token) {
        window.location.href = '/'
      }
  
      if (userGoogle) {}
      fetchData()
    }, [token])

    const [formData, setFormData] = useState({
      username: "",
      avatar: ""
    })
  
    const logoutHandler = async (e) => {
      e.preventDefault()
  
      if (users) {
        localStorage.removeItem('token')
      } else if (userGoogle) {
        localStorage.removeItem('userGoogle')
      }
      window.location.href = '/'
    }

    return(
        <div className="w-full min-h-screen bg-gray-100">
            <nav className='bg-white border-gray-100 border-b-2 px-2 sm:px-4 py-4 rounded'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='/home' className='flex items-center'>
            <img
              src='/assets/logo.png'
              className='mr-3 h-6 sm:h-9'
              alt='Devla Logo'
            />
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mobile-menu-button'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className='hidden w-full md:block md:w-auto mobile-menu'
            id='navbar-default'
          >
            <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
              <li>
                <a
                  href='/home'
                  className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/product'
                  className='block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0'
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href='/start'
                  className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'
                >
                  Start Selling
                </a>
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
     

<div className="w-[80%] mx-auto py-10"> 
<h2 className="text-2xl font-bold">Devla Seller</h2>
<div className="flex gap-5 items-center mt-7 justify-between">

  <div className="flex items-center bg-white rounded-full">
    <button onClick={()=>setCategory("Products")} className={`px-12 text-gray-500 text-sm ${dynamicClass(category,"Products")} font-medium py-4`}>My Products</button>
    <button onClick={()=>setCategory("Statistics")}  className={`px-12 text-gray-500 text-sm ${dynamicClass(category,"Statistics")} font-medium py-4`}>Statistics</button>
    <button onClick={()=>setCategory("Ratings")}  className={`px-12 text-gray-500 text-sm ${dynamicClass(category,"Ratings")} font-medium py-4`}>Ratings</button>
  </div>
  {category === "Products" && (
    <select className="w-[170px] py-3 border border-gray-300 outline-none rounded-full" placeholder="Listed">
    <option>Listed</option>
  </select>
  )}
  
  
</div>
  
  <SellerContent type={category}/>
  </div>
  <section>
            <div className="mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 ">
                <div className="relative w-5/12 space-y-4">
                    <img src="/assets/logo.png" alt="" className="h-[64px] w-[157px]" />
                    <p className="text-[16px]  font-regular text-585858 max-w-md">Devla is the international design template community for creative individuals to sell your self-made template design , grow your business, and buy your very own template design.</p>
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
     
export default Seller;