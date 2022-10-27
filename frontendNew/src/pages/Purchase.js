import { useState, useEffect, Fragment } from "react"
import decode from "jwt-decode";
import { AiOutlineDownload,AiOutlinePlus } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Purchase = () => {
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
  
      if (userGoogle) {}
      fetchData()

    }, [token])

    const [formData, setFormData] = useState({
      id: userData.id,
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
                  className='block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/product'
                  className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'
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
      <div className="w-[70%] mx-auto py-10">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <div className="flex gap-5 items-stretch mt-7">
          <div className="flex-1 bg-white py-5 px-7 rounded-md">
             <h3 className="text-xl font-bold">Product</h3>
             <img src="images/product.png" alt="ilus" className="mt-5"/>
             <h4 className="text-xl font-medium mt-4">Nature Themed E-Commerce Website Template 2022</h4>
             <p className="text-sm text-gray-500 leading-5 mt-3">
             Moody Food Theme is a perfect design with the harmonic mixture between colors and layout space so ideal for you to sell pizza, cakes, bakery, drink, food, fast food, pasta or cheeseburger restaurant. 
             </p>
             <div className="flex items-center justify-between mt-5">
              <span className="font-semibold text-sm flex items-center">
                <BsFillPatchCheckFill className="inline-block align-middle mr-2 text-orange-500 text-lg"/>
                John Doe  
              </span>
              <p className="text-sm font-semibold">$50.00</p>
             </div>
            </div> 
          <div className="flex-1 bg-white py-5 px-5">
            <h3 className="text-xl font-bold">Payment Details</h3>
            <button className="border border-gray-200 mt-7 font-medium text-center w-full rounded-full text-gray-500 py-3 px-5">Choose a payment method</button>
            <div className="mt-10"> 
              <h4 className="text-md font-medium">Discount code</h4>
              <div className="flex items-center mt-2">
                <input type="number" className="border border-gray-200 px-3 py-[8px] flex-1"></input>
                <button className="border border-gray-200 py-[9px] px-4 text-sm font-medium">Apply</button>
              </div>
            </div>
            <div className="mt-7">
            <p className="flex my-2 font-semibold items-center justify-between">
                <span>Subtotal</span> <span>$50.00</span>
              </p>
            <p className="flex my-2 font-semibold items-center justify-between">
                <span>Tax</span> <span>$5.00</span>
              </p>
              <p className="flex my-2 font-semibold items-center justify-between">
                <span>Total</span> <span>$55.00</span>
              </p>
            </div>
            <div className="text-center mt-7">
            <button className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-full">Pay 500$</button>
            </div>
          </div>
        </div>
      </div>
     </div> 
    )
    }
export default Purchase;