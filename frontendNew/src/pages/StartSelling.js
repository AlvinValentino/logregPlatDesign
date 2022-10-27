import React, { useState, useEffect, Fragment } from "react"
import decode from "jwt-decode";
import { AiOutlineDownload,AiOutlinePlus } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StartSelling = () => {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle)
    const userData = decode(users ? users : userGoogle).data
  
    const fetchData = () => {
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
  
      if(userGoogle) {}
      fetchData()

    }, [token])

    const uploadImage = async (e) => {
      const file = e.target.files[0]
      const base64 = await convertBase64(file)
      setFormData({...formData, product_file: base64})
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

    const [formData, setFormData] = useState({
      id_seller: userData.id,
      id: userData.id,
      username: "",
      avatar: "",
      product_name: "",
      product_file: "",
      description: "",
      category: "Animation",
      nett_price: "",
    })

    const HandleChange = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value})
    }

    const productHandler = async(e) => {
      e.preventDefault()

      await axios.post("http://localhost:8000/api/input", formData)
      .then(() => {
        window.location.reload()
      })
    }
  
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
        <div className="w-full min-h-screen">
            <nav className="bg-white border-gray-100 border-b-2 px-2 sm:px-4 py-4 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="index.html" className="flex items-center">
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
                            <a href="/product" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 text-[14px]">Our Products</a>
                        </li>
                        <li>
                            <a href="/start" className="block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0 text-[14px]">Start Selling</a>
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

      <div className="w-full bg-slate-100 px-12 pt-10 pb-24">
        <h2 className="capitalize text-3xl font-bold">start selling</h2>
        <div className="bg-white rounded-md py-7 mt-7 px-12 flex justify-between items-center">
            <div className="flex-1 text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Product File <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <label htmlFor="file_upload" className="flex items-center bg-orange-400 text-white text-sm font-semibold py-2 px-10 rounded-full cursor-pointer">
            <AiOutlineDownload className="mr-1" style={{ fontSize:"25px" }}/>
            Upload
            </label>
            <input type="file" accept="image/x-png,image/gif,image/jpeg" name="product_file" id="file_upload" onChange={(e) => uploadImage(e)} className="hidden" />
        </div>
        <div className="mt-7 bg-white py-7">
        <h2 className="capitalize text-center text-2xl font-bold">Upload product photos</h2>
        <div className="w-full mt-7 grid grid-cols-12 gap-4 px-10">
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
              {formData.product_file === '' ? 
                <div>
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 1</h5>
                </div>
              :
                <img src={formData.product_file} alt="" className="w-[580px] h-[200px]" />
              }
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 2</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 3</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 4</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 5</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                  <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400"/>
                  <h5 className="font-semibold text-gray-400">Photo 6</h5>
            </div>
        </div>
        </div>
        <div className="bg-white mt-7 py-10 px-10">
            <h2 className="text-center text-xl font-bold">Product Information</h2>
            <div className="flex items-start justify-between mt-7">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Product Name <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <input type="text" onChange={(e) => HandleChange(e)} value={formData.product_name} name="product_name" className="w-[60%] outline-none resize-none py-3 px-3 rounded-md mt-3 border-gray-300 border" required />
            </div>

            <div className="flex items-start justify-between mt-7">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg mt-3">
                    Description <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <textarea type="text" value={formData.description} onChange={(e) => HandleChange(e)} name="description" className="w-[60%] outline-none resize-none h-[140px] py-2 px-3 rounded-md border-gray-300 border"></textarea>
            </div>
        </div>

        <div className="bg-white mt-7 py-4 px-10">
            <div className="flex items-center justify-between mt-7">
            <div className="w-[30%] text-gray-800 mb-5">
            <h3 className="flex items-center font-semibold text-lg">
                    Product Category <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <select name="category" onChange={(e) => HandleChange(e)} value={formData.category} className="w-[60%] outline-none mb-4 py-3 px-3 rounded-md border-gray-300 border">
              <option value="Animation">Animation</option>
              <option value="Branding">Branding</option>
              <option value="Illustration">Illustration</option>
              <option value="Mobile">Mobile</option>
              <option value="Print">Print</option>
              <option value="Product Design">Product Design</option>
              <option value="Typography">Typography</option>
              <option value="Web Design">Web Design</option>
              <option value="Other">Other</option>
            </select>
            </div>
        </div>

        <div className="bg-white mt-7 pt-4 pb-10 px-10">
            <h2 className="text-center text-xl font-bold">Pricing</h2>
            <div className="flex items-center justify-between mt-7">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Nett Price <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <input type="number" name="nett_price" value={formData.nett_price} onChange={(e) => HandleChange(e)} className="w-[60%] outline-none resize-none py-4 px-3 rounded-md border-gray-300 border" required />
            </div>
        
        </div>
        <div className="flex justify-center gap-4 mt-10">
            <a href="/home" className="py-2 px-10 rounded-full border-2 border-gray-400 text-gray-500 cursor-pointer">Cancel</a>
            <button className="py-2 px-10 rounded-full border-2 border-gray-400 text-gray-500">Save Draft</button>
            <button onClick={productHandler} className="py-2 px-10 rounded-full bg-orange-400 text-white font-semibold">Save & Upload</button>

        </div>
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

export default StartSelling;