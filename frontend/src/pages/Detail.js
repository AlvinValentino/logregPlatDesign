import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode'
import axios from 'axios';
import 'swiper/css';

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function Detail() {

    const [user, setUser] = useState(userGoogle ? decode(userGoogle) : {})
    const [token, setToken] = useState(users ? users : userGoogle);

    const MutipleSlidesPerView = () => {
        const params = {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
    }

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await axios.get('http://localhost:8000/api/user')
        .then((response) => {
            setUser(response.data);
        })
    }

    useEffect(() => {
        if(!token) {
            window.location.href = "/";
        }

        if(!userGoogle) {
            fetchData();
        }

    }, [token]);

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
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">{user.given_name || user.name}</a>
                    </li>
                    <form onSubmit={logoutHandler}>
                        <li>
                            <button className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Logout</button>
                        </li>
                    </form>
                </ul>
            </div>
        </div>
    </nav>
    <section>
        <div className=" mt-10 ml-24 relative  tablet: w-[1670px]  justify-items-end">
                    <img src="/assets/detail1.png" className=" mr- w-11/12 h-96 rounded-xl m-auto" alt="" />
                </div>
    </section>
    <div className=" mt-6 ml-40 text-gray-300  font-bold">
Style / Fashion
    </div>
    <div className=" -mt-1 ml-40  tablet:text-5xl text-3xl text-303030 text-black font-medium text-[35px]">
    Fashion College Creator Kit
    </div>
    <div className=" -mt-12 text-right p-10">
                    <button className=" -mt-12 w-[200px] h-[60px] mr-64 rounded-full bg-pink-500 transition hover:bg-pink-800 focus:bg-pink-800 active:bg-pink-800" >
                        <span className="font-semibold text-white text-lg">Like</span>
                    </button>
                </div>
                <div class="mt-8 ml-40 flex flex-row space-x-2 items-center">
                                        <img src="/assets/muka1.jpeg" class="h-7 w-7 mr-2 rounded-full" alt="" />
                                        <img src="/assets/logoverified.png" class="h-5 w-5 mr-2" alt="" />
                                        <label className="font-medium text-gray-700">John Doe</label>
                                        <label className=" font-medium text-orange-400">Follow</label>
                                    </div>
                                    <div className="mt-8 ml-40 flex flex-row justify-between items-center">
                                    <div className="flex flex-wrap">
                                    <div>
                                        <img src="/assets/detail2.png" className=" mb-4 w-[390px]" alt="" />
                                        <img src="/assets/detail4.png" className=" mb-10  w-[390px]" alt="" />
                                    </div>
                                    <div className='ml-10'>
                                        <img src="/assets/detail3.png" className=" mb-4 w-[390px]" alt="" />
                                        <img src="/assets/detail5.png" className=" mb-10 w-[390px]" alt="" />
                                        </div>
                                    </div>
                                        <div className="mr-40 -mt-10 border-2 border-gray-400 rounded-md">
                                        <div className=" mt-16 ml-16  tablet:text-5xl text-3xl text-303030 text-black font-medium">
    Detail: 
    </div>
    <div className=" mt-8 ml-16  tablet:text-5xl text-3xl text-303030 text-black font-semibold">
    Rp 99.000,00
    </div>
    <div className=" mt-8 ml-16  text-gray-400">
    What is it?
A collection of graphic elements +<br/> pre-made templates to create your<br/> own fashion collages. Add variety to<br/>
 your blog, website, Instagram, 
</div>
<button className=" hover mt-8 ml-16  text-orange-500 transition hover:text-orange-600 focus:text-orange-600 active:text-orange-800">
   Show More
</button>
<div className=" mt-6 text-center p-10">
                    <button className=" w-[476.34px] h-20 px-6 py-3 rounded-full bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800">
                        <span className="font-semibold text-white text-lg">Purchase Now</span>
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