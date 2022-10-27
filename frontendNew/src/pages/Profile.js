import { useState, useEffect, Fragment } from "react";
import decode from "jwt-decode";
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneHeart,AiFillEye } from "react-icons/ai";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { dataGrids,dataUsers } from "../constants/Data";
import { DataFetching } from "../components";
import axios from 'axios'


const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);
    const [menu,setMenu] = useState("Creation")
    const [dataMenus,setDataMenus] = useState(["Creation", "Liked", "Saved", "Followers", "Following"])
    const userData = decode(users).data

    const fetchData = () => {
      setUser(userData)
      
      axios.post('http://localhost:8000/api/showUser', formData)
        .then((response) => {
            const { data } = response.data
            setFormData({...formData, username: data[0].username, name: data[0].name, email: data[0].email, address: data[0].address, phone: data[0].phone, description: data[0].description, avatar: data[0].avatar})
        })
    }

    const [formData, setFormData] = useState({
      id: userData.id,
      username: "",
      name: "",
      email: "",
      address: "",
      phone: "",
      description: "",
      avatar: "",
  })

    useEffect(() => {
      if (!token) {
        window.location.href = '/'
      }

      if(userGoogle) {}

      fetchData()
    }, [token])

  const logoutHandler = async (e) => {
    e.preventDefault()

    if (users) {
      localStorage.removeItem('token')
    } else if (userGoogle) {
      localStorage.removeItem('userGoogle')
    }
    window.location.href = '/'
  }

    return (
        <section className="w-full min-h-screen bg-white">
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
                                    <a href='/profile' className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
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
      <div className="w-[80%] mx-auto mt-7">
        <img src="/assets/banner.png" alt="banner" className="w-full rounded-md h-[450px] object-cover"/>
        <div className="profile w-full flex justify-between items-center pt-5 pb-7 border-b border-gray-300">
            <div className="flex-1 relative">
                <img src={formData.avatar} alt="muka" className="w-[140px] h-[140px] rounded-full border-4 border-white absolute left-7 -top-24"/>
                <div className="ml-[190px]">
                    <h2 className="font-bold text-3xl">{formData.name}</h2>
                    <h5 className="font-medium text-md mt-1 mb-2 text-gray-500">{formData.email}</h5>
                    <div className="following flex items-center">
                        <p className="text-sm font-normal text-gray-400">0 Following</p>
                        <p className="ml-2 font-normal text-gray-400">10 Followed</p>
                    </div>
                </div>
            </div>
            <a href="/edit" className="rounded-full bg-orange-400 text-white font-semibold text-sm py-2 px-4 cursor-pointer">Edit Profile</a>
        </div>
        <div className="flex items-center py-3">
           {dataMenus.map((data, idx) => (
            <button onClick={() => setMenu(data)} className={`font-medium  text-md px-5 py-3 rounded-t-md
            ${data === menu ? 'border-b-2' : ''}
            ${data === menu ? 'border-orange-500' : ''}

             ${data === menu ? 'text-orange-500' : 'text-gray-500'}`} key={idx}>{data}</button>
            
           ))}
        </div>
       <DataFetching type={menu}/>
      </div>
      <section>
        <div className='shadow-t-xl mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 overflow-x-auto'>
          <div className='relative w-5/12 space-y-4'>
            <img src='/assets/logo.png' alt='' className='h-16 w-max' />
            <p className='text-2xl italic text-585858 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className='flex-col'>
            <p className='font-bold text-2xl mb-5'>For Designer</p>
            <p className='text-lg mb-5'>Go Pro!</p>
            <p className='text-lg mb-5'>Explore Design Work</p>
            <p className='text-lg mb-5'>Design Blog</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
          </div>
          <div className='flex-col'>
            <p className='font-bold text-2xl mb-5'>For Designer</p>
            <p className='text-lg mb-5'>Go Pro!</p>
            <p className='text-lg mb-5'>Explore Design Work</p>
            <p className='text-lg mb-5'>Design Blog</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
          </div>
          <div className='flex-col'>
            <p className='font-bold text-2xl mb-5'>For Designer</p>
            <p className='text-lg mb-5'>Go Pro!</p>
            <p className='text-lg mb-5'>Explore Design Work</p>
            <p className='text-lg mb-5'>Design Blog</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
            <p className='text-lg mb-5'>Go Pro</p>
          </div>
        </div>
      </section>
      <section className='bg-gray-600'>
        <p className='text-center text-xl p-2 text-gray-400'>
          © Copyright 2022 Devla. All Rights Reserved.
        </p>
      </section>
        </section>
    )
}

export default Profile;