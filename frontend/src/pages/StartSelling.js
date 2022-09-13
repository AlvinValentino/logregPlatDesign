import { useState,useEffect } from "react"
import decode from "jwt-decode";
import { AiOutlineDownload,AiOutlinePlus } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

const StartSelling = () => {
    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle)
    const userData = decode(users ? users : userGoogle)
  
    const fetchData = () => {
      setUser(userData.user)
    }
  
    useEffect(() => {
      if (!token) {
        window.location.href = '/'
      }
  
      if (!userGoogle) {
        fetchData()
      }
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

    return(
        <div className="w-full min-h-screen">
            <nav className='bg-white border-gray-100 border-b-2 px-2 sm:px-4 py-4 rounded'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='index.html' className='flex items-center'>
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
                  href='/'
                  className='block py-2 pr-4 pl-3 text-gray-700 bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'
                >
                  {user.given_name || user.name}
                </a>
              </li>
              <form onSubmit={logoutHandler}>
                <li>
                  <button className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0'>
                    Logout
                  </button>
                </li>
              </form>
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
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit.

</p>
            </div>
            <button className="flex items-center bg-orange-400 text-white text-sm font-semibold py-2 px-10 rounded-full">
            <AiOutlineDownload className="mr-1" style={{ fontSize:"25px" }}/>
            Upload
            </button>
        </div>
        <div className="mt-7 bg-white py-7">
        <h2 className="capitalize text-center text-2xl font-bold">Upload product photos</h2>
        <div className="w-full mt-7 grid grid-cols-12 gap-4 px-10">
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
            <div className="col-span-4 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
                <MdAddPhotoAlternate className="text-[80px] text-gray-400"/>
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
            </div>
        </div>
        </div>
        <div className="bg-white mt-7 py-4 px-10">
            <h2 className="text-center text-xl font-bold">Product Information</h2>
            <div className="flex items-start justify-between mt-7">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Product Name <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit

</p>
            </div>
            <textarea type="text" className="w-[60%] outline-none resize-none h-[140px] py-2 px-3 rounded-md border-gray-300 border"></textarea>
            </div>
            <div className="flex items-center justify-between mt-3">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Product Category <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit

</p>
            </div>
            <select className="w-[60%] outline-none  py-3 px-3 rounded-md border-gray-300 border"></select>
            </div>
        </div>
        <div className="bg-white rounded-md py-7 mt-7 px-12 flex justify-between items-center">
            <div className="flex-1 text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Product Variant <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit.

</p>
            </div>
            <button className="flex items-center bg-orange-400 text-white text-sm font-semibold py-2 px-10 rounded-full">
            <AiOutlinePlus className="mr-1" style={{ fontSize:"25px" }}/>
            Add Variant
            </button>
        </div>
        <div className="bg-white mt-7 py-4 px-10">
            <h2 className="text-center text-xl font-bold">Pricing</h2>
            <div className="flex items-center justify-between mt-7">
            <div className="w-[30%] text-gray-800">
                <h3 className="flex items-center font-semibold text-lg">
                    Net Price <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-orange-400 text-orange-500">Required</span>
                </h3>
                <p className="text-gray-400 mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit

</p>
            </div>
            <input type="number" className="w-[60%] outline-none resize-none  py-4 px-3 rounded-md border-gray-300 border"></input>
            </div>
        
        </div>
        <div className="flex justify-center gap-4 mt-10">
            <button className="py-2 px-10 rounded-full border-2 border-gray-400 text-gray-500">Cancel</button>
            <button className="py-2 px-10 rounded-full border-2 border-gray-400 text-gray-500">Save Draft</button>
            <button className="py-2 px-10 rounded-full bg-orange-400 text-white font-semibold">Save&Upload</button>

        </div>
      </div>
      <section>
        <div className='mx-auto mt-20 mb-20 container flex flex-wrap flex-row items-center justify-between py-10 overflow-x-auto'>
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
        </div>
    )
}

export default StartSelling;