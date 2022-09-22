import React, { useState, useEffect, Fragment } from 'react';
import decode from 'jwt-decode'
import axios from 'axios';
import { AlertSuccess } from '../components'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function EditProfile(props) {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);

    const { alert, setAlert } = props

    const userData = decode(localStorage.getItem('token')).data

    const fetchData = () => {
        setUser(userData)
        
        axios.post('http://localhost:8000/api/showUser', formData)
        .then((response) => {
            const { data } = response.data
            setFormData({...formData, username: data[0].username, name: data[0].name, email: data[0].email, address: data[0].address, phone: data[0].phone, description: data[0].description, avatar: data[0].avatar})
        })
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

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setFormData({...formData, avatar: base64})
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (err) => {
                reject(err)
            }
        })
    }

    // const {alert, setAlert} = props;

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
        fetchData()
    }, []);

    const HandleChange = (e) => {
        setFormData({...formData , [e.target.name]:e.target.value});
    }

    const editHandler = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:8000/api/editUser', formData)
        .then(() => {
            window.location.reload()
        })
    }

    return (
        <div>
            <nav className="sticky top-0 bg-white border-gray-100 border-b-2 px-2 sm:px-4 py-4 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="index.html" className="flex items-center">
                        <img src="/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Devla Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mobile-menu-button" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto mobile-menu" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Our Products</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Start Selling</a>
                            </li>
                            <Menu as="div" className="relative inline-block">
                                <div class>
                                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 text-sm font-medium text-gray-700 focus:outline-none">
                                        <img src="/assets/muka1.jpeg" alt="" className="relative bottom-1 w-[30px] h-[30px] rounded-2xl mr-1"/>
                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                </div>
                                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                <p className='text-gray-700 block px-4 py-2 text-sm'>
                                                    Signed in as
                                                    <br />
                                                    <p className="font-bold text-sm">{user.username}</p>
                                                </p>
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
            <div className="bg-gradient-to-r from-[#FFA41C] to-[#FA7031]">
                <svg className="bg-[url('https://unpkg.com/tailwindcss/dist/tailwind.min.css')] bg-gradient-to-r from-[#FFA41C] to-[#FA7031] "/>
            </div>
            <div className="bg-gradient-to-r from-[#FFA41C] to-[#FA7031]">
                <svg className="bg-[url('https://unpkg.com/tailwindcss/dist/tailwind.min.css')] bg-gradient-to-r from-[#FFA41C] to-[#FA7031] "/>
            </div>
            <div className="bg-gradient-to-r from-[#FFA41C] to-[#FA7031]">
                <svg className="bg-[url('https://unpkg.com/tailwindcss/dist/tailwind.min.css')] bg-gradient-to-r from-[#FFA41C] to-[#FA7031] "/>
            </div>
            <div className="-mt-12 lg:-mt-24 bg-gradient-to-r from-[#FFA41C] to-[#FA7031]">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div className =" flex flex-row ml-44 mr-44 mb-20 -mt-[500px] border-2 rounded-[25.8px] border-[#E4E4E4] bg-white">
                <div className=" mt-14 ml-16 mr-16 tablet: text-[40px] text-303030 font-medium">
                    Account Settings
                    <div className="mt-8 flex flex-col">
                        <img src={formData.avatar === null ? "assets/muka1.jpg" : formData.avatar} className="mt-14 mx-auto w-[200px] h-[200px] rounded-full" alt="" />
                        <div className="mt-8 mb-8 mx-auto w-[250px] h-[50px] text-lg text-black text-center cursor-pointer font-semibold">
                                <label for="file-upload" className='align-middle rounded-full ring-1 ring-[#A2A2A2] mt-8 mb-8 px-20 py-3'>Change</label>
                                <input id="file-upload" type="file" className="hidden w-[250px] h-[50px]" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => uploadImage(e)} />
                        </div>
                    </div>
                </div>
                <div className="mt-44 ml-30">
                {/* <input value={formData.avatar} type="text" /> */}
                    <div className="relative flex flex-col items-center">
                        <label className="-ml-60 mb-4 font-semibold text-[25px] text-[#585858]">Username</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900 " viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="username" placeholder="Username" name="username" value={formData.username} onChange={(e) => HandleChange(e)} className="p-6 h-14 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                        </div>
                    </div>  
                    <div className="mt-12 relative flex flex-col items-center">
                        <label className="-ml-72 mb-4 font-semibold text-[25px] text-[#585858]">Name</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="name" placeholder="Name" name="name" value={formData.name} onChange={(e) =>HandleChange(e)} className=" p-6 h-14 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
                    </div>
                    <div className="mt-12 relative flex flex-col items-center">
                        <label className="-ml-72 mb-4 font-semibold text-[25px] text-[#585858]">Email</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="email" name="email" value={formData.email} className="p-6 h-14 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" readOnly />
                        </div>
                    </div>
                </div>
                <div className="mt-44 ml-28">
                    <div className="relative flex flex-col items-center">
                        <label className=" -ml-[270px] mb-4 font-semibold text-[25px] text-[#585858]">Address</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="address" placeholder="Address" name="address" value={formData.address} onChange={(e) => HandleChange(e)} className="p-6 h-14 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
                    </div>
                    <div className="mt-12 relative flex flex-col items-center">
                        <label className="-ml-72 mb-4 font-semibold text-[25px] text-[#585858]">Phone</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="phone" placeholder="Phone Number" name="phone" value={formData.phone} onChange={(e) =>HandleChange(e)} className="p-6 h-14 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
                    </div>
                    <div className="mt-12 relative flex flex-col items-center">
                        <label className="-ml-60 mb-4 font-semibold text-[25px] text-[#585858]">Description</label>
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A2A2A2" className="bi bi-pencil-square absolute ml-[337px] transition hover:fill-gray-600 focus:fill-gray-800 active:fill-gray-900" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            </svg>
                            <input type="description" placeholder="Description" name="description" value={formData.description} onChange={(e) => HandleChange(e)} className="p-6 h-28 w-96 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" />
                        </div>
                    </div>
                </div>
                <div className=" flex-row-reverse">
                    <button className="block mx-auto -ml-[885px] mt-[760px] mb-20 w-[400px] h-[60px]  rounded-full bg-orange-500 transition hover:bg-orange-800 focus:bg-orange-800 active:bg-orange-800" onClick={editHandler}>
                        <span className="font-semibold text-white text-lg">Save Changes</span>
                    </button>
                </div>        
            </div>
        </div>
    )
}; 
export default EditProfile;