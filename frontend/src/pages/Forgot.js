import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Forgot(props) {
  const khusus = localStorage.getItem('khusus')

  const token = useState({})

  const { alert, setAlert } = props

  const [formData, setFormData] = useState({
    email: '',
  })

  useEffect(() => {
    if (khusus) {
      window.location.href = '/resend'
    }
  })

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const forgotHandler = async (e) => {
    e.preventDefault()

    if (formData.email === '') {
      setTimeout(() => {
        setAlert({ isOpen: false })
      }, 5000)

      return setAlert({
        isOpen: true,
        title: 'Field masih kosong!',
        message: 'Ayo diisi.',
      })
    }

    await axios
      .post('http://127.0.0.1:8000/api/auth/forgetPassword', formData)
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem('khusus', 'forgot')
        localStorage.setItem('email', formData.email)
        window.location.href = '/resend'
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='h-screen m-auto'>
      <div hidden className='fixed inset-0 w-5/12  text-white lg:block'>
        <img
          className='w-full h-full object-cover'
          src='/images/bg1.png'
          alt='bg1'
        />
        <div className='absolute inset-0 bg-ov bg-opacity-20'></div>
      </div>
      <div className='relative h-full ml-auto lg:w-7/12 flex items-center'>
        <div className='m-auto py-12 px-6 sm:p-20 xl:w-10/12'>
          <div className='space-y-5'>
            <a href='/'>
              <img
                src='/images/logo.png'
                className='w-60 inline'
                alt='devla logo'
              />
            </a>
            <p className='font-medium text-lg text-gray-500'>
              Welcome to Devla ! Forgot Password?
            </p>
          </div>
          <form
            onSubmit={forgotHandler}
            method='POST'
            className='space-y-6 mt-10'
          >
            <div className='relative flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 absolute ml-5 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={(e) => HandleChange(e)}
                className='w-full py-3 pr-3 pl-12 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none'
              />
            </div>
            <div className='text-center'>
              <button className='w-full px-6 py-3 rounded-xl bg-orange-500 transition hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-800'>
                <span className='font-semibold text-white text-lg'>Send</span>
              </button>
              <p className='w-max p-3 mx-auto'>
                <span className='text-sm tracking-wide'>
                  Already remember?{' '}
                  <a href='/' className='text-sm text-orange-500'>
                    Login
                  </a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgot
